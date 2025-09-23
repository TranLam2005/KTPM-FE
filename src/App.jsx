import React from "react";
import Footer from "./features/layout/Footer/Footer";

import { AppRouter } from "./app/routes/AppRouter";

import { Toaster } from "sonner";

function App() {
  return (
    <React.Fragment>
      <AppRouter />
      <Footer />
      <Toaster richColors position="top-right" />
    </React.Fragment>
  );
}

export default App;
