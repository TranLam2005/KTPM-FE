import HomePage from "../../home/pages/HomePage";
export function usePublicRouter() {
  const publicRouter = [
    {
      path: "/",
      element: <HomePage />,
    },
  ];
  return publicRouter;
}
