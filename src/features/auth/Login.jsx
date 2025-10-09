import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import usersData from "../../data/user.json";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
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

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );

    if (user) {
      alert(`Chào mừng, ${user.name}!`);
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#ffe5e5] to-[#fff5f5]">
      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-[#ff4d4d]/20 shadow-lg p-8 rounded-2xl w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-[#e60012]">
          Đăng nhập
        </h1>

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
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>

        <p className="text-center text-sm text-gray-700">
          Chưa có tài khoản?{" "}
          <a
            href="/register"
            className="text-[#e60012] hover:underline font-medium"
          >
            Đăng ký ngay
          </a>
        </p>
      </form>
    </div>
  );
}
