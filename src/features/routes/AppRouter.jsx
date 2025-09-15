import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { LoadingPage } from "../../components/loading/LoadingPage";
import { usePublicRouter } from "../category/sates/router";

export const AppRouter = () => {
    const publicRouter = usePublicRouter();
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: publicRouter
        }
    ])
    return <RouterProvider router = {router} />;
}