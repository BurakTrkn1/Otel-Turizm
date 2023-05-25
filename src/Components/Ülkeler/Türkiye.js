import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../../src/App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Search from "../Search";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "../Header";
import axios from "axios";
import HotelIcon from "@mui/icons-material/Hotel";
function Türkiye({ datas, setDatas, rezerve, setRezerve }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const getotel = () => {
    axios
      .get("http://localhost:8081/oteltü")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("1");
    getotel();
  }, []);
  const rezerves = (data) => {
    setRezerve([
      ...rezerve,
      {
        id: data.id,
        Imb: data.Imb,
        uzaklik: data.uzaklik,
        yer: data.yer,
        içmekan: data.içmekan,
        özellik: data.özellik,
        tutar: parseFloat(data.tutar),
        reklam: data.reklam,
      },
    ]);
    // setRezerve(rezerve);

    console.log(rezerve);
  };

  const location1 = useLocation();
  const [openDate, setOpenDate] = useState(false);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      {/* <Header type="list" /> */}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Ara</h1>
            <div className="lsItem">
              <label>Varış noktası</label>
            </div>

            <div className="lsItem">
              <label>özellikler</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Minumum tutar <small>gecelik</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max tutar <small>gecelik</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Yetişkin</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Çocuk</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    // placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Oda</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Ara</button>
          </div>
          <div className="listResult">
            {datas.map((item, ind) => {
              return (
                <div className="searchItem">
                  <img src={item.img} alt="" className="siImg" />
                  <div className="siDesc">
                    <h1 className="siTitle">{item.yer}</h1>
                    <span className="siDistance">{item.uzaklik} </span>
                    <span className="siSubtitle">{item.içmekan}</span>
                    <span className="siFeatures">{item.özellik}</span>
                    <span className="siCancelOp">Ücretsiz iptal </span>
                    <span className="siCancelOpSubtitle">
                      Daha sonra iptal edebilirsiniz, bu yüzden bugün bu harika
                      fiyatı yakalayın!
                    </span>
                  </div>
                  <div className="siDetails">
                    <div className="siRating">
                      <button>{item.Imb}</button>
                    </div>
                    <div className="siDetailTexts">
                      <span className="siPrice">{item.tutar}</span>
                      <span className="siTaxOp">{item.reklam}</span>
                      <button
                        className="siCheckButton"
                        onClick={() => rezerves(item)}
                      >
                        Rezervasyon
                      </button>
                      <div>
                        {" "}
                        <p>
                          Detaylı bilgi için{" "}
                          <a href={item.buradan}>
                            <HotelIcon />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Türkiye;
