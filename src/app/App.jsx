import React from "react";
import Footer from "../components/Footer";
import { AppRouter } from "./routes/AppRouter";
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
