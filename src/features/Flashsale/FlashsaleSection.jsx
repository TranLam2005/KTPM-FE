import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Flashsale from "./flashsale";

const FlashsaleSection = () => {
  return (
    <section className="w-full bg-[#ff6c6b] px-4">
      {/* Header Flash Sale */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-orange-500">FLASH SALE</h2>
        {/* Nếu có countdown timer thì thêm vào đây */}
        <div className="text-sm font-medium text-gray-600">
          Kết thúc sau: <span className="text-red-500">12:34:56</span>
        </div>
      </div>

      {/* Carousel Flash Sale */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        className="flashsale-swiper"
      >
        <SwiperSlide>
          <Flashsale
            image="https://cdn0.fahasa.com/media/catalog/product/8/9/8935086848632.jpg"
            name="Daily Expression - Top 1500+ Cụm Từ Tiếng Anh Thông Dụng Theo Chủ Đề"
            price="95.400đ"
            discount="-40%"
            oldPrice="159.000đ"
            sold={45}
            total={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flashsale
            image="https://cdn0.fahasa.com/media/catalog/product/9/7/9786040244302.jpg"
            name="Chinh Phục Đề Thi HSK 3 (Kèm Giải Thích Ngữ Pháp Chi Tiết)"
            price="94.000đ"
            discount="-25%"
            oldPrice="125.000đ"
            sold={60}
            total={120}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flashsale
            image="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246922262.jpg"
            name="Tự Học Tiếng Hàn Cấp Tốc - Tập 2"
            price="64.000đ"
            discount="-30%"
            oldPrice="90.000đ"
            sold={80}
            total={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flashsale
            image="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246922262_1.jpg"
            name="Truyện Ngụ Ngôn Aesop - Thỏ Và Rùa"
            price="30.000đ"
            discount="-25%"
            oldPrice="40.000đ"
            sold={30}
            total={80}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Flashsale
            image="https://cdn0.fahasa.com/media/catalog/product/9/7/9786040244302_1.jpg"
            name="The Ultimate Guide to Money"
            price="308.000đ"
            discount="-30%"
            oldPrice="440.000đ"
            sold={10}
            total={50}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FlashsaleSection;
