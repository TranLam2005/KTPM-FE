import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import usersData from "../../data/user.json";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Lấy danh sách người dùng tạm (localStorage hoặc file json)
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

    // Kiểm tra email trùng
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      alert("Email đã tồn tại!");
      setLoading(false);
      return;
    }

    // Tạo user mới
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#ffe5e5] to-[#fff5f5]">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-[#ff4d4d]/20 shadow-lg p-8 rounded-2xl w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-[#e60012]">
          Đăng ký
        </h1>

        <div>
          <label className="block text-sm mb-1 text-gray-700">
            Tên người dùng
          </label>
          <Input
            type="text"
            name="name"
            placeholder="Nhập tên của bạn"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">Email</label>
          <Input
            type="email"
            name="email"
            placeholder="Nhập email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-700">Mật khẩu</label>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
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
  );
}
