import { useState } from "react";
import { Route, Routes, BrowserRouter, Form } from "react-router-dom";
import Landing from "./components/landing";
import SinglePage from "./components/single_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/invoice" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
