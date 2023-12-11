import React from "react";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarLogin from "./Components/utility/NavBarLogin";
import Footer from "./Components/utility/Footer";
import LoginPage from "./path/LoginPage";
import Register from "./path/Register";
import CategoryPage from "./Pages/Category/CategoryPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categorypage" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
