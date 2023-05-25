import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Input, TextField } from "@mui/material";
import "../../src/App.css";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function Login({ user, setUser }) {
  const location = useLocation();
  const [err, setErr] = useState("");
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8081/login", {
        email: data.email,
        password: data.password,
      })

      .then((response) => {
        if (response.data == "Success") {
          setUser(response.config.data);
          console.log(user);
          navigate("/Home");
        } else {
          setErr("Gmail  veya Şifre yanlış olabilir");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // user = [
  //   ...user,
  //   {
  //     username: data.username,
  //     password: data.password,
  //   },
  // ];

  // };
  return (
    <div>
      {/* <Grid
          container
          width="250px"
          height="100px"
          padding="20px"
          position="absolute"
          top="40%"
          left=" 15%"
          margin-left="-140px"
          margin-top="-50px"
          direction="column-reverse"
          justifyContent="space-around"
          alignItems="center"
        > */}
      {location.pathname !== "/Header" && (
        <div className="giriş">
          <div className="login">
            <div className="login-box">
              <h2>Login</h2>
              <p className="error">{err}</p>

              <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                <div className="user-box">
                  <Grid>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <input
                          type=""
                          label="Username"
                          onChange={onChange}
                          onBlur={onBlur}
                          selected={value}
                          required
                        />
                      )}
                    />
                  </Grid>
                </div>
                <div className="user-box">
                  <Grid>
                    <Controller
                      control={control}
                      name="password"
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <input
                          type="password"
                          label="password"
                          onChange={onChange}
                          onBlur={onBlur}
                          selected={value}
                          required
                        />
                      )}
                    />
                  </Grid>
                </div>
                <Button id="lgn" type="submit" color="info">
                  Login
                </Button>
                {/* <Button id="rgs" type="submit" color="info">
              Register
            </Button> */}
                <a href="/Signup">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Hesap oluştur
                </a>
              </form>
              {/* </Grid> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
