import { Outlet } from "react-router-dom";
import Header from "./header/header";

export const MainLayout = () => {
    return (
        <div>
            <div className="flex flex-col w-full h-full justify-center items-center">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};