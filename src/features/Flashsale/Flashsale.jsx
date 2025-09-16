import React from "react";

const Flashsale = ({
  image,
  name,
  price,
  discount,
  oldPrice,
  sold,
  total,
  badge = "",
}) => (
  <div className="w-[180px] rounded-lg bg-white p-2">
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="rounded-md object-cover w-full h-[220px]"
      />
      {badge && (
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {badge}
        </span>
      )}
    </div>

    {/* Tên sản phẩm */}
    <h3 className="mt-2 text-sm line-clamp-2">{name}</h3>

    {/* Giá */}
    <div className="flex items-center gap-2 mt-1">
      <p className="text-base text-red-600 font-semibold">{price}</p>
      {discount && (
        <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
          {discount}
        </span>
      )}
    </div>
    {oldPrice && (
      <p className="text-xs text-gray-400 line-through">{oldPrice}</p>
    )}

    {/* Đã bán */}
    <div className="mt-1">
      <p className="text-xs text-gray-500">Đã bán {sold}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${Math.min((sold / total) * 100, 100)}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export default Flashsale;
