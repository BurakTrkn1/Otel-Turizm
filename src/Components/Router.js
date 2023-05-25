import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Hotel from "./Hotel";
import Login from "./Login";
import Rezervasyon from "./Rezervasyon";
import Home from "./Home";
import Türkiye from "./Ülkeler/Türkiye";
import Search from "./Search";
import Datatürk from "./Datas/Türkiyedata";
import İsviçre from "./Ülkeler/İsviçre";
import Dataisviçre from "./Datas/İsviçredata";
import Maldivler from "./Ülkeler/Maldivler";
import Brezilya from "./Ülkeler/Brezilya";
import Bahamalar from "./Ülkeler/Bahamalar";
import Yunanistan from "./Ülkeler/Yunanistan";
import Bahamalardata from "./Datas/Bahamalardata";
import Signup from "./Signup";
import Yunandata from "./Datas/Yunandata";
import Maldivlerdata from "./Datas/Maldivlerdata";
import Brezilyadata from "./Datas/Brezilyadata";
function Router() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const { productisveç, setProductisviçre } = Dataisviçre;
  const { producttürk, setProducttürk } = Datatürk;
  const { bahamalardata, setBahamalardata } = Bahamalardata;
  const { yunandata, setYunandata } = Yunandata;
  const { maldivdata, setMaldivdata } = Maldivlerdata;
  const { brezildata, setBrezildata } = Brezilyadata;

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
                datas={producttürk}
                setDatas={setProducttürk}
              />
            }
          />
          <Route path="/Search" element={<Search />} />
          <Route
            path="/İsviçre"
            element={
              <İsviçre
                rezerve={rezerve}
                setRezerve={setRezerve}
                datasisveç={productisveç}
                setDataisveç={setProductisviçre}
              />
            }
          />
          <Route
            path="/Maldivler"
            element={
              <Maldivler
                maldivdata={maldivdata}
                rezerve={rezerve}
                setRezerve={setRezerve}
                datas={data}
                setDatas={setData}
              />
            }
          />
          <Route
            path="/Brezilya"
            element={
              <Brezilya
                brezildata={brezildata}
                rezerve={rezerve}
                setRezerve={setRezerve}
              />
            }
          />
          <Route
            path="/Bahamalar"
            element={
              <Bahamalar
                databahamalar={bahamalardata}
                rezerve={rezerve}
                setRezerve={setRezerve}
              />
            }
          />
          <Route
            path="/Yunanistan"
            element={
              <Yunanistan
                yunandata={yunandata}
                setYunandata={setYunandata}
                rezerve={rezerve}
                setRezerve={setRezerve}
                datas={data}
                setDatas={setData}
              />
            }
          />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
