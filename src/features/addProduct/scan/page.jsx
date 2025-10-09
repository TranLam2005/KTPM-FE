// src/pages/scan.tsx (hoặc component nơi bạn dùng)
import React, { useState } from "react";
import QrAddProduct from "./components/QrAddProduct";
import ProductQR from "./components/GenerateQr";

export default function ScanPage() {
  const [cart, setCart] = useState([]);

  function handleAdd(p) {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === p.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 };
        return next;
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  }

  return (
    <div className="p-4">
      <ProductQR />
      <QrAddProduct onAddToCart={handleAdd} />
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Giỏ hàng</h3>
        <ul className="mt-2 space-y-2">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between border rounded-lg p-3"
            >
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">x{item.quantity}</div>
              </div>
              <div className="font-medium">
                {(Number(item.price) * item.quantity).toLocaleString("vi-VN")} đ
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
