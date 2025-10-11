import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import usersData from "../../data/user.json";
import Header from "../layout/auth/header";
import Footer from "../layout/Footer/Footer";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || usersData;
    setUsers(storedUsers);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      alert("Email đã tồn tại!");
      setLoading(false);
      return;
    }

    const newUser = {
      id: users.length + 1,
      ...form,
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    alert("Đăng ký thành công!");
    window.location.href = "/login";
  };

  return (
    <div>
      <Header />
      <div
        className="flex items-center justify-center min-h-[60vh] max-h-[calc(100vh-240px)] bg-cover bg-center py-4"
        style={{
          backgroundImage: `url('/src/assets/background1.jpg')`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#ff4d4d]/20 shadow-lg p-6 w-full h-auto max-w-sm space-y-4 rounded-none"
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-[#e60012]">Đăng ký</h1>
          </div>

          <div>
            <Input
              type="text"
              name="name"
              placeholder="Tên người dùng"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e60012] hover:bg-[#cc0010] text-white transition-all duration-300"
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </Button>

          <div className="flex items-center my-2">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="mx-2 text-gray-400 text-xs">HOẶC</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded py-2 text-[#1877f3] font-medium hover:bg-blue-50 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.594 1.325-1.326V1.326C24 .592 23.405 0 22.675 0"/>
              </svg>
              Facebook
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded py-2 text-[#ea4335] font-medium hover:bg-red-50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <g>
                  <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.45 2.36 30.68 0 24 0 14.82 0 6.68 5.48 2.69 13.44l7.98 6.2C12.12 13.16 17.61 9.5 24 9.5z"/>
                  <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.74H24v9.01h12.41c-.54 2.9-2.19 5.36-4.67 7.01l7.19 5.6C43.98 37.13 46.1 31.37 46.1 24.55z"/>
                  <path fill="#FBBC05" d="M10.67 28.65c-1.13-3.37-1.13-6.98 0-10.35l-7.98-6.2C.62 16.47 0 20.13 0 24c0 3.87.62 7.53 2.69 11.9l7.98-6.2z"/>
                  <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.91-5.85l-7.19-5.6c-2.01 1.35-4.59 2.15-8.72 2.15-6.39 0-11.88-3.66-13.33-8.94l-7.98 6.2C6.68 42.52 14.82 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </g>
              </svg>
              Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-700">
            Đã có tài khoản?{" "}
            <a
              href="/login"
              className="text-[#e60012] hover:underline font-medium"
            >
              Đăng nhập ngay
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
