import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../src/App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Search from "./Search";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Header from "./Header";

function Türkiye({ datas, rezerve, setRezerve }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  console.log(datas);
  const rezerves = (data) => {
    setRezerve([
      ...rezerve,
      {
        id: data.id,
        yer: data.yer,
        içmekan: data.içmekan,
        özellik: data.özellik,
        tutar: parseInt(data.tutar),
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
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
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
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    // placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    // placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {datas.map((item, ind) => {
              return (
                <div className="searchItem">
                  <img src={item.img} alt="" className="siImg" />
                  <div className="siDesc">
                    <h1 className="siTitle">{item.yer}</h1>
                    <span className="siDistance">merkezden 500m ileride </span>
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
                      <span>Harika</span>
                      <button>8.9</button>
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
                      <a href="https://www.bodrumholidayresort.com/landing/?utm_source=adwords&utm_medium=search&utm_campaign=lokal-bodrum-tatil-duyarli&gclid=Cj0KCQjww4-hBhCtARIsAC9gR3aMk81PeIQzUZR6DfoxWZtIupmAMJ7TpFXqXHWFJ5rzLJy24RuPPb4aAqoyEALw_wcB">
                        buradan
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    //   <img src="https://www.bodrumholidayresort.com/landing/assets/images/galeri/8.webp"></img>
    //   <span>Türkiye</span>
    //   <h2 className="span">Palmiye</h2>
    //   <p className="writet">
    //     18,700 tl kişibaşı 7 gece{" "}
    //     <a href="https://www.clubmed.com.tr/r/palmiye/y">detaylı bilgi için</a>
    //   </p>
    //   <h2 className="head">PALMİYE OTELİ</h2>
    //   <p className="write">
    //     Çam ağaçlarının gölgesinde konumlanmış bungalovlar ve Akdeniz
    //     maviliğinin kıyısında bir cennet… Plajın ve yeni Zen havuzun tadını
    //     sonuna kadar çıkarın. 12 tenis dersimizden biriyle servis ve backhand
    //     vuruşlarınızı geliştirin. Gençler Club Med Passworld'de cok eğlenecek.
    //     Uçan trapezde saçlarınızı rüzgarla uçmaya bırakın ve Club Med Sothys
    //     Spa'da her şeyi unutun. Ailenizle veya arkadaşlarınızla; Palmiye`de
    //     herkes için bir mutluluk var…
    //   </p>
    // </div>

    // <div className="hotelContainer">
    //   {open && (
    //     <div className="slider">
    //       <ArrowForwardIcon className="close" onClick={() => setOpen(false)} />
    //       <ArrowBackIcon className="arrow" onClick={() => handleMove("l")} />
    //       <div className="sliderWrapper">
    //         <img src={photos[slideNumber].src} alt="" className="sliderImg" />
    //       </div>
    //       <ArrowBackIcon className="arrow" onClick={() => handleMove("r")} />
    //     </div>
    //   )}
    //   <div className="hotelWrapper">
    //     <button className="bookNow">Reserve or Book Now!</button>
    //     <h1 className="hotelTitle">Tower Street Apartments</h1>
    //     <div className="hotelAddress">
    //       <span>Elton St 125 New york</span>
    //     </div>
    //     <span className="hotelDistance">
    //       Excellent location – 500m from center
    //     </span>
    //     <span className="hotelPriceHighlight">
    //       Book a stay over $114 at this property and get a free airport taxi
    //     </span>
    //     <div className="hotelImages">
    //       {photos.map((photo, i) => (
    //         <div className="hotelImgWrapper" key={i}>
    //           <img
    //             onClick={() => handleOpen(i)}
    //             src={photo.src}
    //             alt=""
    //             className="hotelImg"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //     <div className="hotelDetails">
    //       <div className="hotelDetailsTexts">
    //         <h1 className="hotelTitle">Stay in the heart of City</h1>
    //         <p className="hotelDesc">
    //           Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
    //           Street Apartments has accommodations with air conditioning and
    //           free WiFi. The units come with hardwood floors and feature a fully
    //           equipped kitchenette with a microwave, a flat-screen TV, and a
    //           private bathroom with shower and a hairdryer. A fridge is also
    //           offered, as well as an electric tea pot and a coffee machine.
    //           Popular points of interest near the apartment include Cloth Hall,
    //           Main Market Square and Town Hall Tower. The nearest airport is
    //           John Paul II International Kraków–Balice, 16.1 km from Tower
    //           Street Apartments, and the property offers a paid airport shuttle
    //           service.
    //         </p>
    //       </div>
    //       <div className="hotelDetailsPrice">
    //         <h1>Perfect for a 9-night stay!</h1>
    //         <span>
    //           Located in the real heart of Krakow, this property has an
    //           excellent location score of 9.8!
    //         </span>
    //         <h2>
    //           <b>$945</b> (9 nights)
    //         </h2>
    //         <button>Reserve or Book Now!</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Türkiye;
