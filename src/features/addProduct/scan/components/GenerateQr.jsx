import QRCode from "qrcode";
const payload = JSON.stringify({
  sku: "BK-004",
  name: "Novel Harry potter",
  price: "122000.00",
  description: "A step-by-step guide to building web applications with Django.",
  is_active: 1,
  stock_qty: 20,
  created_at: "2025-10-07T15:30:18Z",
  updated_at: "2025-10-07T15:30:18Z",
  manufacturer: {
    id: 3,
    name: "O'Reilly",
  },
  images: [
    {
      id: 1,
      image_url: "https://cdn.example.com/bk-001/cover.jpg",
      alt_text: "Front cover of Django for Beginners",
      is_primary: 1,
      sort_order: 1,
    },
    {
      id: 2,
      image_url: "https://cdn.example.com/bk-001/back.jpg",
      alt_text: "Back cover",
      is_primary: 0,
      sort_order: 2,
    },
  ],
  category: "Technique",
});

const dataUrl = await QRCode.toDataURL(payload, {
  errorCorrectionLevel: "M",
  width: 512,
  margin: 1,
});

export default function ProductQR() {
  return (
    <div>
      <h2>Product QR Code</h2>
      <a href={dataUrl} download={`QR_${payload.sku}.png`}>
        Tải QR
      </a>
    </div>
  );
}
