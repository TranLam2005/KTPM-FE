import ScanPage from "@/features/addProduct/scan/page";
import HomePage from "../../home/pages/HomePage";
export function usePublicRouter() {
  const publicRouter = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/scan",
      element: <ScanPage />,
    },
  ];
  return publicRouter;
}
