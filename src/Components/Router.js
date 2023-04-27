import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hotel from "./Hotel";
import Login from "./Login";
import Rezervasyon from "./Rezervasyon";
import Home from "./Home";
import Türkiye from "./Türkiye";
import Search from "./Search";
import Data from "./Data";
function Router() {
  const [user, setUser] = useState([]);
  const { product, setProduct } = Data;
  const [rezerve, setRezerve] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login user={user} setUser={setUser} />} />
          <Route
            path="/Rezervasyon"
            element={<Rezervasyon rezerve={rezerve} setRezerve={setRezerve} />}
          />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Türkiye"
            element={
              <Türkiye
                rezerve={rezerve}
                setRezerve={setRezerve}
                datas={product}
                setDatas={setProduct}
              />
            }
          />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
