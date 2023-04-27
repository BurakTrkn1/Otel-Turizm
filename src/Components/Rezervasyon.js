import { Input } from "@mui/material";
import React from "react";

function Rezervasyon({ rezerve }) {
  console.log(rezerve);
  return (
    <div>
      {rezerve.map((item, ind) => {
        return <Input value={item.yer}>{item.yer}</Input>;
      })}
    </div>
  );
}

export default Rezervasyon;
