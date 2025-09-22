import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      {/* Đăng ký nhận bản tin */}
      <div className="bg-gray-200 py-4 px-6 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="mr-2 text-lg">
            <i className="fa fa-envelope" />
          </span>
          <span className="font-semibold">ĐĂNG KÝ NHẬN BẢN TIN</span>
        </div>
        <div className="flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Nhập địa chỉ email của bạn"
            className="border border-gray-300 rounded-l px-4 py-2 w-full md:w-64"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r font-semibold cursor-pointer hover:bg-orange-600">
            Đăng ký
          </button>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 gap-y-10">
        {/* Cột trái: Logo + Thông tin công ty */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="src/assets/fahasa-logo.png"
            alt="Fahasa Logo"
            className="mb-4 w-full max-w-xs h-16 object-contain"
          />
          <p>
            Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM <br />
            Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA <br />
            60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
          </p>
          <p className="mt-2">
            Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi.
            <br />
            <span className="font-semibold text-red-500">KHÔNG</span> hỗ trợ đặt
            mua và nhận hàng trực tiếp tại văn phòng <br />
            cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
          </p>
          {/* Icon mạng xã hội */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4 text-[2rem]">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-blue-600" />
            </a>
            <a href="#" aria-label="Youtube">
              <FaYoutube className="text-red-600" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-pink-500" />
            </a>
            <a href="#" aria-label="Tiktok">
              <FaTiktok className="text-black" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-blue-400" />
            </a>
          </div>
          {/* App download */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl">
            <a href="#" aria-label="Google Play">
              <SiGoogleplay className="text-green-600" />
            </a>
            <a href="#" aria-label="App Store">
              <SiAppstore className="text-black" />
            </a>
          </div>
        </div>

        {/* Cột giữa: Dịch vụ + Liên hệ */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-semibold mb-2">DỊCH VỤ</h3>
          <ul className="space-y-1 text-sm">
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật thông tin cá nhân</li>
            <li>Chính sách bảo mật thanh toán</li>
            <li>Giới thiệu Fahasa</li>
            <li>Hệ thống trung tâm - nhà sách</li>
          </ul>
          <div className="mt-4">
            <h4 className="font-semibold mb-1">LIÊN HỆ</h4>
            <div className="flex flex-col gap-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaMapMarkerAlt className="min-w-[20px]" />
                <span>60-62 Lê Lợi, Q.1, TP. HCM</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaEnvelope className="min-w-[20px]" />
                <span>cskh@fahasa.com.vn</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhone className="min-w-[20px]" />
                <span>1900636467</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cột phải: Hỗ trợ + Tài khoản */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hỗ trợ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-2">HỖ TRỢ</h3>
            <ul className="space-y-1 text-sm">
              <li>Chính sách đổi - trả</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách khách sỉ</li>
            </ul>
            {/* Đối tác vận chuyển */}
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <img
                src="src/assets/shipping/lex.png"
                alt="Lex"
                className="h-12 object-contain"
              />
              <img
                src="src/assets/shipping/ninjavan.png"
                alt="Ninja Van"
                className="h-12 object-contain"
              />
            </div>
          </div>
          {/* Tài khoản */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold mb-2">TÀI KHOẢN CỦA TÔI</h3>
            <ul className="space-y-1 text-sm">
              <li>Đăng nhập/Tạo mới tài khoản</li>
              <li>Thay đổi địa chỉ khách hàng</li>
              <li>Chi tiết tài khoản</li>
              <li>Lịch sử mua hàng</li>
            </ul>
            {/* Đối tác thanh toán */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
              <img
                src="src/assets/payment/vnpay.png"
                alt="VNPay"
                className="h-12 object-contain"
              />
              <img
                src="src/assets/payment/momo.png"
                alt="MoMo"
                className="h-12 object-contain"
              />
              <img
                src="src/assets/payment/shopeepay.png"
                alt="ShopeePay"
                className="h-12 object-contain"
              />
              <img
                src="src/assets/payment/zalopay.png"
                alt="ZaloPay"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chứng nhận & bản quyền */}
      <div className="border-t border-gray-300 py-6 text-center text-sm">
        Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu
        tư TP. HCM cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày
        20/05/2025.
      </div>
    </footer>
  );
}
