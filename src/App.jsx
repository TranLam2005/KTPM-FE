import React from "react";
import Footer from "./features/layout/Footer/Footer";

import { AppRouter } from "./features/routes/AppRouter";

import { Toaster } from "sonner";

function App() {
  return (
    <>
      <AppRouter />
      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
