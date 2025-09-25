import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./Footer/Footer";

export const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col w-full bg-[#e8e8e8] h-full justify-center items-center">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
