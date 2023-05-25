import React from "react";
import { useForm, Controller } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Input, TextField } from "@mui/material";
import "../../src/App.css";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  name: yup.string().required("you did not enter a name"),
  username: yup.string().required("you did not enter a surname"),

  email: yup
    .string()
    .required("enter your email correctly")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "enter your email correctly"
    ),
});
function Signup() {
  const location = useLocation();

  const {
    handleSubmit,
    // reset,
    control,
    // formState: { errors },
  } = useForm();
  // resolver: yupResolver(schema),
  const handleSsubmit = (data) => {
    axios
      .post("http://localhost:8081/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {location.pathname !== "/Header" && (
        <div className="signup">
          <div className="Sig">
            <div className="login-boxes">
              <h2>Signup</h2>
              <div>
                <form onSubmit={handleSubmit((data) => handleSsubmit(data))}>
                  <div className="user-box">
                    <Grid>
                      <Controller
                        control={control}
                        name="name"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <input
                            type=""
                            label="Username"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                            required
                          />
                        )}
                      />
                    </Grid>
                    {/* <p className="error">{errors.name?.message}</p> */}
                  </div>
                  <div className="user-box">
                    <Grid>
                      <Controller
                        control={control}
                        name="email"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <input
                            type=""
                            label="Username"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                            required
                          />
                        )}
                      />
                    </Grid>
                    {/* <p className="error">{errors.email?.message}</p> */}
                  </div>

                  <div className="user-box">
                    <Grid>
                      <Controller
                        control={control}
                        name="password"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <input
                            type="password"
                            label="password"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                            required
                          />
                        )}
                      />
                    </Grid>
                    {/* <p className="error">{errors.password?.message}</p> */}
                  </div>

                  <Button id="lgn" type="submit" color="info">
                    Signup
                  </Button>
                  {/* <Button id="rgs" type="submit" color="info">
            Register
          </Button> */}
                  <a href="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login
                  </a>
                </form>
                {/* </Grid> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
{
  /* <Grid
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
      > */
}
