import axios from "axios";
import { toast } from "sonner";
import { getTokenFromCookies, TOKEN_TYPE } from "./Cookies";

const API_URL = import.meta.env.NEXT_PUBLIC_API_URL;
export const restApi = axios.create({
  baseURL: API_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

restApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    console.log("status", status);
    switch (status) {
      case 400:
        toast.error("Dữ liệu không hợp lệ.");
        break;
      case 401:
        toast.error("Chưa đăng nhập hoặc phiên bản đã hết hạn.");
        break;
      case 403:
        toast.error("Bạn không có quyền truy cập.");
        break;
      case 404:
        toast.error("Không tìm thấy nội dung yêu cầu.");
        break;
      case 500:
        toast.error("Lỗi hệ thống. Vui lòng thử lại sau.");
        break;
      case 409:
        toast.error(
          "Thao tác không hợp lệ. Dữ liệu đã tồn tại hoặc có xung đột.",
        );
        break;
      default:
        toast.error("Đã xảy ra lỗi không xác định.");
    }
    return Promise.reject(error);
  },
);

restApi.interceptors.request.use(
  async (config) => {
    const token = getTokenFromCookies(TOKEN_TYPE.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
