export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#f5f5f5]">
      <div className="max-w-6xl mx-auto flex items-center h-16 px-4">
        <img
          src="/src/assets/fahasa-logo.png"
          alt="Fahasa Logo"
          className="h-8 mr-3"
        />
        <span className="text-xl font-semibold text-[#c92127]">Fahasa</span>
        <span className="ml-2 text-lg text-gray-700">Tài khoản</span>
        <span className="ml-auto text-sm text-[#c92127] cursor-pointer hover:underline">
          Bạn cần giúp đỡ?
        </span>
      </div>
    </header>
  );
}