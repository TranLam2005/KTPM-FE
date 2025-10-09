import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Flashsale from "./Flashsale";
import flashsaleData from "@/data/flashsale.json"; // ✅ import file JSON

const FlashsaleSection = () => {
  const [items, setItems] = useState([]);

  // Giả lập gọi API (fetch từ JSON)
  useEffect(() => {
    setItems(flashsaleData);
  }, []);

  return (
    <section className="w-full bg-[#ffe6e6] px-8 py-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-red-600 tracking-wide">
          FLASH SALE
        </h2>
        <div className="text-sm font-medium text-gray-700">
          Kết thúc sau:{" "}
          <span className="text-red-500 font-semibold">12:34:56</span>
        </div>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        className="flashsale-swiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Flashsale {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FlashsaleSection;
