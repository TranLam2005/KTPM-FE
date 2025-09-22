import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../../features/layout/MainLayout";
import { usePublicRouter } from "../../features/category/sates/router";

export const AppRouter = () => {
    const publicRouter = usePublicRouter();
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: publicRouter
        }
    ])
    return <RouterProvider router={router} />;
}