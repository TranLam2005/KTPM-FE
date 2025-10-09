// src/components/QrAddProduct.tsx
import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { useFetchProduct } from "@/hooks/useFetchProduct";

export default function QrAddProduct({ onAddToCart }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const controlsRef = useRef(null);

  const [devices, setDevices] = useState([]);
  const [deviceId, setDeviceId] = useState(undefined);
  const [torchOn, setTorchOn] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [lastText, setLastText] = useState("");
  const [product, setProduct] = useState(null);

  const { fetchBySku, loading, error, setError } = useFetchProduct();

  // Liệt kê camera
  useEffect(() => {
    (async () => {
      try {
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        const all = await navigator.mediaDevices.enumerateDevices(); // get all media devices in the system
        const cams = all.filter((d) => d.kind === "videoinput");
        setDevices(cams);
        // ưu tiên camera sau
        const back = cams.find((c) => /back|rear|environment/i.test(c.label));
        setDeviceId(back?.deviceId || cams[0]?.deviceId);
      } catch (e) {
        setError("Không truy cập được danh sách camera", e);
      }
    })();
  }, [setError]);

  // Bật/tắt torch (nếu hỗ trợ)
  async function applyTorch(on) {
    try {
      const tracks = streamRef.current?.getVideoTracks?.() || [];
      const track = tracks[0];
      // @ts-ignore: constraint types
      await track?.applyConstraints?.({ advanced: [{ torch: on }] });
      setTorchOn(on);
    } catch {
      // thiết bị không hỗ trợ torch, im lặng
    }
  }

  // Khởi động/quét
  useEffect(() => {
    if (!deviceId) return;

    const reader = new BrowserMultiFormatReader();
    setScanning(true);

    (async () => {
      try {
        const video = videoRef.current;
        const { controls, stream } = await reader.decodeFromVideoDevice(
          deviceId,
          video,
          (result, err) => {
            if (result) handleDecode(result.getText());
          }
        );
        controlsRef.current = controls;
        streamRef.current = stream;
      } catch (e) {
        setError("Không thể mở camera. Hãy kiểm tra quyền truy cập.");
        setScanning(false);
      }
    })();

    return () => {
      controlsRef.current?.stop();
      streamRef.current?.getTracks()?.forEach((t) => t.stop());
      controlsRef.current = null;
      streamRef.current = null;
      setScanning(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceId]);

  // Xử lý kết quả decode
  async function handleDecode(text) {
    // tránh spam đọc trùng
    if (text === lastText) return;
    setLastText(text);

    // giả định QR chứa SKU thuần (nếu bạn encode JSON, tách ở đây)
    const sku = parseSku(text);
    if (!sku) return;

    const data = await fetchBySku(sku);
    if (data) {
      setProduct(data);
      // tạm dừng 1.5s rồi cho quét lại
      setScanning(false);
      setTimeout(() => setScanning(true), 1500);
    }
  }

  function parseSku(raw) {
    try {
      // TH1: QR là JSON: {"sku":"BK-001", ...}
      const obj = JSON.parse(raw);
      if (obj?.sku) return String(obj.sku);
    } catch {
      /* không phải JSON, bỏ qua */
    }
    // TH2: QR là chuỗi SKU trực tiếp
    return raw?.trim();
  }

  // Upload ảnh QR dự phòng
  async function handlePickFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const reader = new BrowserMultiFormatReader();
    try {
      const img = new Image();
      img.src = url;
      await img.decode(); // đảm bảo ảnh đã load
      console.log("Decoding from image", img);
      const result = await reader.decodeFromImage(img);
      console.log("Decode result", result.getText());
      handleDecode(result.getText());
    } catch {
      setError("Không đọc được mã QR từ ảnh.");
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold">Quét mã QR để thêm sản phẩm</h2>

      {/* Khu camera */}
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative rounded-xl overflow-hidden bg-black aspect-[3/2]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
          />
          {/* khung nhắm */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="w-56 h-56 border-2 border-white/80 rounded-xl" />
          </div>
          {/* trạng thái */}
          <div className="absolute left-3 bottom-3 text-xs text-white/90 bg-black/40 px-2 py-1 rounded">
            {scanning ? "Đang quét..." : "Tạm dừng"}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* chọn camera */}
          <label className="text-sm font-medium">Chọn camera</label>
          <select
            className="border rounded-lg px-3 py-2"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
          >
            {devices.map((d) => (
              <option key={d.deviceId} value={d.deviceId}>
                {d.label || `Camera ${d.deviceId.slice(0, 6)}...`}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="mt-2 inline-flex items-center justify-center rounded-lg border px-3 py-2 hover:bg-gray-50"
            onClick={() => applyTorch(!torchOn)}
          >
            {torchOn ? "Tắt đèn" : "Bật đèn"} 🔦
          </button>

          <div className="mt-4">
            <label className="text-sm font-medium">Hoặc tải ảnh QR</label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 block w-full text-sm"
              onChange={handlePickFile}
            />
          </div>
        </div>
      </div>

      {/* Thông báo lỗi */}
      {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

      {/* Kết quả quét gần nhất */}
      {lastText && (
        <div className="mt-3 text-xs text-gray-500">
          QR gần nhất: <span className="font-mono">{lastText}</span>
        </div>
      )}

      {/* Hiển thị sản phẩm */}
      {product && (
        <div className="mt-6 rounded-2xl border p-4 shadow-sm">
          <div className="flex items-start gap-4">
            {/* nếu có ảnh đại diện, bạn map từ product.product_images[0]?.url chẳng hạn */}
            <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
              {/* <img src={product.images?.[0]?.url} alt={product.name} className="w-full h-full object-cover" /> */}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="text-sm text-gray-600">SKU: {product.sku}</div>
              <div className="mt-1 font-medium">
                {Number(product.price).toLocaleString("vi-VN")} đ
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  className="rounded-lg bg-black text-white px-4 py-2 hover:opacity-90"
                  onClick={() => onAddToCart?.(product)}
                >
                  Thêm vào giỏ
                </button>
                <button
                  className="rounded-lg border px-4 py-2 hover:bg-gray-50"
                  onClick={() => setProduct(null)}
                >
                  Quét tiếp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading khi gọi API */}
      {loading && (
        <div className="mt-3 text-sm text-gray-600">Đang tải sản phẩm…</div>
      )}
    </div>
  );
}
