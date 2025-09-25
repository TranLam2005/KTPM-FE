import React, { useMemo, useState } from "react";

// NOTE:
// - Component expects TailwindCSS to be available globally.
// - For the rating stars, this component uses Font Awesome classes.
//   Include FA stylesheet in your index.html if you want the icons to render:
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

export default function TabBooks() {
  const tabs = useMemo(
    () => [
      { id: "van-hoc", label: "Văn học" },
      { id: "kinh-te", label: "Kinh tế" },
      { id: "tam-ly", label: "Tâm lý - Kỹ năng sống" },
      { id: "thieu-nhi", label: "Thiếu nhi" },
      { id: "ngoai-ngu", label: "Sách học ngoại ngữ" },
      { id: "foreign-books", label: "Foreign books" },
      { id: "the-loai-khac", label: "Thể loại khác" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("van-hoc");
  const [selectedBookId, setSelectedBookId] = useState("1");

  const bookDetails = useMemo(
    () => ({
      1: {
        title: "Tắt Đèn",
        author: "Ngô Tất Tố",
        publisher: "Văn Học",
        rating: 4.8,
        reviews: 120,
        price: "75.000đ",
        originalPrice: "89.000đ",
        discount: "15%",
        image:
          "https://upload.wikimedia.org/wikipedia/vi/b/b1/T%E1%BA%AFt_%C4%91%C3%A8n-Nh%C3%A3_Nam.jpeg",
        description:
          "Tắt Đèn là một tiểu thuyết xuất sắc của Ngô Tất Tố, phản ánh chân thực xã hội Việt Nam đầu thế kỷ 20 với những hủ tục nặng nề và cuộc sống khổ cực của người nông dân. Tác phẩm xoay quanh nhân vật chị Dậu với những đau khổ và sự phản kháng trước áp bức.",
      },
      2: {
        title: "Số Đỏ",
        author: "Vũ Trọng Phụng",
        publisher: "Văn Học",
        rating: 4.7,
        reviews: 98,
        price: "68.000đ",
        originalPrice: "80.000đ",
        discount: "15%",
        image:
          "https://book.sachgiai.com/uploads/book/tieu-thuyet-so-do/tieu-thuyet-so-do-vu-trong-phung.jpg",
        description:
          "Số Đỏ là một kiệt tác của Vũ Trọng Phụng, phê phán xã hội Việt Nam những năm 1930 với những thói hư tật xấu của tầng lớp trung lưu thành thị. Tác phẩm xoay quanh nhân vật Xuân Tóc Đỏ - một kẻ vô học nhưng lại trở thành nhà cải cách xã hội.",
      },
      3: {
        title: "Chí Phèo",
        author: "Nam Cao",
        publisher: "Văn Học",
        rating: 4.9,
        reviews: 156,
        price: "62.000đ",
        originalPrice: "75.000đ",
        discount: "17%",
        image:
          "https://product.hstatic.net/200000017360/product/chi-pheo_72e3f1370e484cf49b0fc94ee4ce0f80_master.jpg",
        description:
          "Chí Phèo là một truyện ngắn nổi tiếng của Nam Cao, kể về cuộc đời của Chí Phèo - một nông dân lương thiện bị xã hội tha hóa thành kẻ lưu manh. Tác phẩm là bức tranh hiện thực về số phận người nông dân trước Cách mạng tháng Tám.",
      },
      4: {
        title: "Truyện Kiều",
        author: "Nguyễn Du",
        publisher: "Văn Học",
        rating: 5.0,
        reviews: 200,
        price: "95.000đ",
        originalPrice: "110.000đ",
        discount: "14%",
        image:
          "https://namsaigon.edu.vn/thuvien/wp-content/uploads/2020/10/truyen-kieu.jpg",
        description:
          "Truyện Kiều là kiệt tác của đại thi hào Nguyễn Du, kể về cuộc đời đầy gian truân của Thúy Kiều - một người con gái tài sắc vẹn toàn nhưng phải trải qua nhiều đau khổ. Tác phẩm được coi là di sản văn học vô giá của dân tộc Việt Nam.",
      },
      5: {
        title: "Vợ Nhặt",
        author: "Kim Lân",
        publisher: "Văn Học",
        rating: 4.8,
        reviews: 112,
        price: "58.000đ",
        originalPrice: "70.000đ",
        discount: "17%",
        image:
          "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/vo_nhat___kim_lan/2020_06_17_16_21_32_1-390x510.jpg",
        description:
          "Vợ Nhặt là truyện ngắn xuất sắc của Kim Lân, viết về nạn đói năm 1945. Tác phẩm kể về Tràng - một người nông dân nghèo 'nhặt' được vợ giữa lúc đói kém. Câu chuyện thể hiện khát vọng sống, khát vọng hạnh phúc của con người ngay trong hoàn cảnh khốn cùng.",
      },
    }),
    []
  );

  const listBooks = useMemo(
    () => [
      {
        id: "1",
        thumbBg: "bg-blue-200",
        img: bookDetails[1].image,
        title: bookDetails[1].title,
        author: bookDetails[1].author,
        rating: 4.8,
        reviews: 120,
      },
      {
        id: "2",
        thumbBg: "bg-red-100",
        img: bookDetails[2].image,
        title: bookDetails[2].title,
        author: bookDetails[2].author,
        rating: 4.7,
        reviews: 98,
      },
      {
        id: "3",
        thumbBg: "bg-green-100",
        img: bookDetails[3].image,
        title: bookDetails[3].title,
        author: bookDetails[3].author,
        rating: 4.9,
        reviews: 156,
      },
      {
        id: "4",
        thumbBg: "bg-purple-100",
        img: bookDetails[4].image,
        title: bookDetails[4].title,
        author: bookDetails[4].author,
        rating: 5.0,
        reviews: 200,
      },
      {
        id: "5",
        thumbBg: "bg-yellow-100",
        img: bookDetails[5].image,
        title: bookDetails[5].title,
        author: bookDetails[5].author,
        rating: 4.8,
        reviews: 112,
      },
    ],
    [bookDetails]
  );

  const currentBook = bookDetails[selectedBookId];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col w-full h-[718px]">
        {/* Tabs Header */}
        <div className="flex border-b border-[#e5e7eb] bg-gray-50 px-2 overflow-x-auto">
          {tabs.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={[
                  "tab-btn py-3 px-4 text-sm font-medium transition-all whitespace-nowrap",
                  isActive
                    ? "border-b-[3px] border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-700 hover:text-blue-600",
                ].join(" ")}
                data-tab={t.id}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Tabs Content */}
        <div className="flex flex-1 p-5 bg-gray-50">
          {/* Văn học */}
          {activeTab === "van-hoc" && (
            <div className="w-full h-full flex gap-5">
              {/* Left list */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden w-[466.66px] h-[580px]">
                {listBooks.map((b, idx) => {
                  const isActive = selectedBookId === b.id;
                  return (
                    <div
                      key={b.id}
                      className={[
                        "flex items-center p-3 border-b border-[#e5e7eb] hover:bg-blue-50 cursor-pointer transition-all w-[465.66px] h-[116px]",
                        isActive ? "bg-blue-100" : "",
                      ].join(" ")}
                      data-book={b.id}
                      onMouseEnter={() => setSelectedBookId(b.id)}
                      onClick={() => setSelectedBookId(b.id)}
                    >
                      <div
                        className={`w-16 h-20 ${b.thumbBg} rounded-md overflow-hidden mr-3 flex-shrink-0`}
                      >
                        <img
                          src={b.img}
                          alt={b.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {b.title}
                        </h3>
                        <p className="text-sm text-gray-600">{b.author}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-500">
                            <i className="fas fa-star" />
                          </span>
                          <span className="text-xs text-gray-500 ml-1">
                            {b.rating} ({b.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right details */}
              <div className="bg-white rounded-lg shadow-md p-6 w-[653.33px] h-[485.14px]">
                <BookDetail book={currentBook} />
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {activeTab !== "van-hoc" && (
            <div className="w-full h-full grid place-items-center">
              {activeTab === "kinh-te" && (
                <Placeholder
                  iconClass="fas fa-chart-line text-blue-500"
                  title="Kinh tế"
                />
              )}
              {activeTab === "tam-ly" && (
                <Placeholder
                  iconClass="fas fa-brain text-green-500"
                  title="Tâm lý - Kỹ năng sống"
                />
              )}
              {activeTab === "thieu-nhi" && (
                <Placeholder
                  iconClass="fas fa-child text-yellow-500"
                  title="Thiếu nhi"
                />
              )}
              {activeTab === "ngoai-ngu" && (
                <Placeholder
                  iconClass="fas fa-language text-red-500"
                  title="Sách học ngoại ngữ"
                />
              )}
              {activeTab === "foreign-books" && (
                <Placeholder
                  iconClass="fas fa-globe text-purple-500"
                  title="Foreign books"
                />
              )}
              {activeTab === "the-loai-khac" && (
                <Placeholder
                  iconClass="fas fa-ellipsis-h text-gray-500"
                  title="Thể loại khác"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Placeholder({ iconClass, title }) {
  return (
    <div className="text-center">
      <i className={`${iconClass} text-5xl mb-4`} />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">Nội dung sẽ được hiển thị tại đây.</p>
    </div>
  );
}

function BookDetail({ book }) {
  if (!book) return null;

  return (
    <div id="book-detail-content">
      <div className="flex">
        <div className="w-40 h-56 bg-blue-100 rounded-lg overflow-hidden mr-6 flex-shrink-0">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
          <p className="text-gray-600 mt-1">
            Tác giả: <span className="font-medium">{book.author}</span>
          </p>
          <p className="text-gray-600 mt-1">
            Nhà xuất bản: <span className="font-medium">{book.publisher}</span>
          </p>
          <div className="flex items-center mt-3">
            <div className="flex text-yellow-500">
              {generateStarRating(book.rating)}
            </div>
            <span className="text-gray-600 ml-2">
              {book.rating} ({book.reviews} reviews)
            </span>
          </div>
          <div className="mt-6 flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              {book.price}
            </span>
            <span className="text-lg text-gray-500 line-through ml-2">
              {book.originalPrice}
            </span>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded ml-3">
              Giảm {book.discount}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-[#e5e7eb] pt-4">
        <h3 className="font-semibold text-gray-800">Mô tả sản phẩm</h3>
        <p className="text-gray-600 mt-2">{book.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-gray-500 mt-1">
              Tình trạng:{" "}
              <span className="text-green-700 font-medium">Còn hàng</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {Array.from({ length: fullStars }).map((_, i) => (
        <i key={`full-${i}`} className="fas fa-star" />
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <i key={`empty-${i}`} className="far fa-star" />
      ))}
    </>
  );
}
