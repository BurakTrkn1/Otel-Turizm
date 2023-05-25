import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Input, TextField, Box, Grid, Alert } from "@mui/material";
import "../../src/App.css";
function Rezervasyon({ rezerve }) {
  const [name, setName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numOfGuests, setNumOfGuests] = useState(1);
  console.log(rezerve);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Ad: ", name);
    console.log("Giriş Tarihi: ", checkInDate);
    console.log("Çıkış Tarihi: ", checkOutDate);
    console.log("Kişi Sayısı: ", numOfGuests);

    setName("");
    setCheckInDate("");
    setCheckOutDate("");
    setNumOfGuests(1);
    alert("Rezervasyon tamamlandı");
  };

  return (
    <div className="Rezervasyon">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Adınız:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {rezerve.map((item, ind) => {
            return (
              <div>
                <div className="form-group">
                  <label htmlFor="name">Yer:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={item.yer}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Tutar:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={item.tutar}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            );
          })}

          <div className="form-group">
            <label htmlFor="checkInDate">Giriş Tarihi:</label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Çıkış Tarihi:</label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numOfGuests">Kişi Sayısı:</label>
            <select
              id="numOfGuests"
              name="numOfGuests"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(parseInt(e.target.value))}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button type="submit">Rezervasyon Yap</button>
        </form>
      </div>
    </div>
  );
}

export default Rezervasyon;
