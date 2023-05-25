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
function Brezilya({ brezildata, datas, rezerve, setDatas, setRezerve }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  console.log(datas);
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
  console.log(datas);
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
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const location1 = useLocation();
  console.log(location1);
  //   const [destination, setDestination] = useState(location1.state.destination);
  //   const [date, setDate] = useState(location1.state.date);
  const [openDate, setOpenDate] = useState(false);
  //   const [options, setOptions] = useState(location1.state.options);
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
              {/* <input placeholder={destination} type="text" /> */}
            </div>
            {/* <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div> */}
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
            {brezildata.map((item, ind) => {
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

export default Brezilya;
