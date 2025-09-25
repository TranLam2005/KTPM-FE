export default function ProductCategoriesV2() {
  return (
    <div className="font-sans w-full bg-gradient-to-br from-customGray-50 to-customGray-100 flex flex-col items-center justify-center">
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden p-6">
        {/* Header */}
        <div className="flex items-center mb-6 w-[203.42px] h-[29.7px] sm:w-auto sm:h-auto sm:mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">
            Danh mục sản phẩm
          </h2>
        </div>

        {/* Grid/List */}
        <div className="w-full flex flex-wrap justify-between gap-2 py-3">
          {CATALOG_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[100px] text-center p-3 rounded-lg bg-customGray-50 hover:bg-customGray-100 transition-all duration-200 transform hover:-translate-y-1.5 hover:shadow-lg category-item"
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
                  loading="lazy"
                  className="w-[100px] h-[100px] object-contain mx-auto mb-2"
                />
                <div className="text-sm font-medium text-gray-800 break-words whitespace-normal category-text transition-colors duration-300 hover:text-customRed hover:-translate-y-0.5">
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

export const CATALOG_ITEMS = [
  {
    href: "link1",
    img: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/8936235570006-1.jpg",
    alt: "Conan Movie 2025",
    label: "Conan Movie 2025",
  },
  {
    href: "link2",
    img: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/8935337532127.jpg",
    alt: "Balo Xịn Giá Tốt",
    label: "Balo Xịn Giá Tốt",
  },
  {
    href: "link3",
    img: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/6902957275668-2-removebg-preview.png",
    alt: "Thiết Bị Số",
    label: "Thiết Bị Số",
  },
  {
    href: "https://example.com/link4",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Thang-08-2025/SGK-Lop3-1.jpg",
    alt: "SGK 2025",
    label: "SGK 2025",
  },
  {
    href: "https://example.com/link5",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/2502/8935244874389.jpg",
    alt: "Lịch Sử Việt Nam",
    label: "Lịch Sử Việt Nam",
  },
  {
    href: "https://example.com/link6",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-tu-sach/8934974182375.jpg",
    alt: "Văn Học",
    label: "Văn Học",
  },
  {
    href: "https://example.com/link7",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/atomichabit100x100.jpg",
    alt: "Tâm Lý Kỹ Năng",
    label: "Tâm Lý Kỹ Năng",
  },
  {
    href: "https://example.com/link8",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/bup-sen-xanh-100x100.png",
    alt: "Thiếu Nhi",
    label: "Thiếu Nhi",
  },
  {
    href: "https://example.com/link9",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/hsk100x100.jpg",
    alt: "Sách Học Ngoại Ngữ",
    label: "Sách Học Ngoại Ngữ",
  },
  {
    href: "https://example.com/link10",
    img: "https://cdn1.fahasa.com/media/wysiwyg/Duy-VHDT/ngoai-van-t1-24(1).jpg",
    alt: "Ngoại Văn",
    label: "Ngoại Văn",
  },
];
