import React from "react";

const Flashsale = ({
  image,
  name,
  price,
  discount,
  oldPrice,
  sold = 0,
  total = 100,
  badge,
}) => {
  // Tính phần trăm tiến độ
  const progress = Math.min((sold / total) * 100, 100);

  // Tính trạng thái để hiển thị badge tự động nếu cần
  const lowStock = total - sold <= 10;

  return (
    <div className="w-[200px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Ảnh sản phẩm */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="rounded-t-xl object-cover w-full h-[240px]"
        />

        {/* Badge */}
        {(badge || lowStock) && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
            {badge || "Sắp hết!"}
          </span>
        )}
      </div>

      {/* Nội dung */}
      <div className="p-3">
        {/* Tên sản phẩm */}
        <h3
          className="text-sm font-medium line-clamp-2 min-h-[40px] text-gray-800"
          title={name}
        >
          {name}
        </h3>

        {/* Giá và giảm giá */}
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <p className="text-lg text-red-600 font-bold">{price}</p>
            {discount && (
              <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                {discount}
              </span>
            )}
          </div>
          {oldPrice && (
            <p className="text-xs text-gray-400 line-through">{oldPrice}</p>
          )}
        </div>

        {/* Thanh hiển thị tiến độ bán */}
        <div className="mt-2">
          <p className="text-xs text-gray-500">
            Đã bán <span className="font-semibold text-gray-700">{sold}</span> /{" "}
            {total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                progress > 80
                  ? "bg-red-500"
                  : "bg-gradient-to-r from-red-500 to-orange-400"
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsale;
