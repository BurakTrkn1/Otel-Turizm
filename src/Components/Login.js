import React from "react";
import { useForm, Controller } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import { TextField } from "@mui/material";
import "../../src/App.css";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login({ user, setUser }) {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    user = [
      ...user,
      {
        username: data.username,
        password: data.password,
      },
    ];
    const timer = setTimeout(() => navigate("/Home"), 1500);
    console.log(user);
  };
  return (
    <div>
      <div className="login">
        <Grid
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
        >
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <Grid>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextField
                    type=""
                    label="Username"
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    required
                  />
                )}
              />
              <Grid>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
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
            </Grid>
            <Button id="lgn" type="submit" color="info">
              Login
            </Button>
            {/* <Button id="rgs" type="submit" color="info">
              Register
            </Button> */}
            <a href="/Register">create acount</a>
          </form>
        </Grid>
      </div>
    </div>
  );
}

export default Login;
