import React, { useState } from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "../../src/App.css";
import Search from "./Search";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

function Header({ type }) {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/Türkiye", { state: { destination, date, options } });
  };

  const navigate = useNavigate();
  const Rezervasyon = () => {
    navigate("/Rezervasyon");
  };
  const Home = () => {
    navigate("/Home");
  };
  const Hotel = () => {
    navigate("/Hotel");
  };
  return (
    <div>
      {location.pathname !== "/" && (
        <div className="header">
          <div
            className={
              type === "list" ? "headerContainer listMode" : "headerContainer"
            }
          >
            <div className="headerList">
              <div className="headerListItem active">
                <Button variant="succses" onClick={Home}>
                  Home
                </Button>
              </div>
              <div className="headerListItem active">
                <Button variant="succses" onClick={Hotel}>
                  Otel
                </Button>
              </div>
              <div className="headerListItem active">
                <Button variant="succses" onClick={Rezervasyon}>
                  Rezervasyon
                </Button>
              </div>
            </div>
            {type !== "list" && (
              <>
                <h1 className="headerTitle">Ömür boyu indirim mi? Bu Dahi.</h1>
                <p className="headerDesc">
                  Seyahatleriniz için ödül alın - %10'a varan anında tasarrufun
                  kilidini açın veya ücretsiz bir Lamabooking hesabıyla daha
                  fazlası
                </p>
                {/* <button className="headerBtn">Sign in / Register</button> */}
                <div className="headerSearch">
                  <div className="headerSearchItem">
                    <input
                      type="text"
                      placeholder="Nereye gideceksin?"
                      className="headerSearchInput"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  <div className="headerSearchItem">
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yyyy"
                    )}`}</span>
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                      />
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <span
                      onClick={() => setOpenOptions(!openOptions)}
                      className="headerSearchText"
                    >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                    {openOptions && (
                      <div className="options">
                        <div className="optionItem">
                          <span className="optionText">Adult</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.adult <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.adult}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("adult", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Children</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.children <= 0}
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.children}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">Room</span>
                          <div className="optionCounter">
                            <button
                              disabled={options.room <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "d")}
                            >
                              -
                            </button>
                            <span className="optionCounterNumber">
                              {options.room}
                            </span>
                            <button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "i")}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="headerSearchItem">
                    <Button variant="contained" onClick={handleSearch}>
                      Search
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
