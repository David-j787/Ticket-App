import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./../../redux/actions";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";

const styleText = {
  textDecoration: "none",
  color: "inherit",
  marginRight: "1rem",
  textAlign: "center",
};

export default function NavBar() {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#373E47" }} position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ marginRight: "2rem" }}>
            <b>Cinem</b>
            <span style={{ color: "#5ED5A8" }}>
              <b>App</b>
            </span>
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Link to="/home" style={styleText}>
              HOME
            </Link>
            <Link to="/users" style={styleText}>
              USUARIOS
            </Link>
            <Link to="/admins" style={styleText}>
              ADMINS
            </Link>
            <Link to="/peliculas" style={styleText}>
              PELICULAS
            </Link>
            <Link to="/categorias" style={styleText}>
              CATEGORIAS
            </Link>
            <Link to="/addTickets" style={styleText}>
              TICKETS
            </Link>
            <Link to="/ventas" style={styleText}>
              VENTAS
            </Link>
            <Link to="/sucursales" style={styleText}>
              SUCURSALES
            </Link>
          </Box>
          <Avatar sx={{ marginLeft: "auto" }}>
            <LogoutOutlined
              onClick={handleLogOut}
              style={{ cursor: "pointer" }}
            />
          </Avatar>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
