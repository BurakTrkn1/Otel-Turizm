import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Hotel() {
  const navigate = useNavigate();
  const Türkiye = () => {
    navigate("/Türkiye");
  };
  return (
    <div>
      <Button onClick={Türkiye}>Türkiye</Button>
    </div>
  );
}

export default Hotel;
