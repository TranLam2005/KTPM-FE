import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../../features/layout/MainLayout";
import { usePublicRouter } from "../../features/category/sates/router";
import Login from "../../features/auth/Login";
import Register from "../../features/auth/Register";

export const AppRouter = () => {
  const publicRouter = usePublicRouter();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: publicRouter,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
};
