import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Success from "./components/Success";
import Currency from "./pages/currency";
import Form from "./pages/Form";
import Outbound from "./pages/Outbound";
import AfterSubmit from "./pages/AfterSubmit";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Form />} />
          <Route path="/confirm" element={<AfterSubmit />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success" element={<Success />} />
          <Route path="/outbound" element={<Outbound />} />
          <Route path="/outbound/mmk" element={<Currency />} />
          <Route path="/outbound/usd" element={<Currency />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
