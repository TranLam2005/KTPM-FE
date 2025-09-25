export default function ProductCategories() {
  const items = [
    {
      href: "https://example.com/link1",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/Icon_1509_120x120.png",
      alt: "15.9",
      label: "15.9",
    },
    {
      href: "https://example.com/link2",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-09-2025/ico_foreignbooks.png",
      alt: "Ngoại Văn",
      label: "Ngoại Văn",
    },
    {
      href: "https://example.com/link3",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-04-2025/Icon_Sboook_120x120.png",
      alt: "SBooks",
      label: "SBooks",
    },
    {
      href: "https://example.com/link4",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-06-2025/Icon_TanViet_120x120.png",
      alt: "Tân Việt",
      label: "Tân Việt",
    },
    {
      href: "https://example.com/link5",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-01-2025/IconFlashSale120x120.png",
      alt: "Flash Sale",
      label: "Flash Sale",
    },
    {
      href: "https://example.com/link6",
      img: "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png",
      alt: "Mã Giảm Giá",
      label: "Mã Giảm Giá",
    },
    {
      href: "https://example.com/link7",
      img: "https://cdn1.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png",
      alt: "Sản Phẩm Mới",
      label: "Sản Phẩm Mới",
    },
    {
      href: "https://example.com/link8",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-01-2024/ChoDoCu.png",
      alt: "Chợ Đồ Cũ",
      label: "Chợ Đồ Cũ",
    },
    {
      href: "https://example.com/link9",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/ICON/Icon_DonSi_120x120.png",
      alt: "Bán Sỉ",
      label: "Bán Sỉ",
    },
    {
      href: "https://example.com/link10",
      img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-06-2024/icon_ManngaT06.png",
      alt: "Manga",
      label: "Manga",
    },
  ];

  return (
    <div className="font-sans w-full flex flex-col items-center justify-center p-5 bg-white rounded-md">
      <div className="w-full h-[125px] flex items-center justify-center max-w-6xl bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="w-full flex items-center justify-between gap-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[100px] text-center p-3 rounded-lg bg-[#f9fafb] hover:bg-[#f3f4f6] transition-all duration-200"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-[42px] h-[42px] object-contain mx-auto mb-2"
                />
                <div className="text-sm font-medium text-gray-800 break-words whitespace-normal">
                  {item.label}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
