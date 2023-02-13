import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Tabs,
  Tab,
  Button,
} from "@mui/material";

function NavBar() {
  const [value, setValue] = useState();
  return (
    <AppBar position="static" sx={{ background: "black", padding: "10px" }}>
      <CssBaseline />
      <Toolbar>
        <LocalPizzaIcon />
        {/* <Typography variant="h6">🍕Pizza Delicious</Typography> */}

        <Tabs
          textColor="inherit"
          value={value}
          onChange={(e, setValue) => setValue(value)}
          indicatorColor="secondary"
        >
          {/* <Link to="/" className="navbar-item active"> */}
            <Tab label="Home" />
          {/* </Link> */}
          {/* <Link to="/menu" className="navbar-item active"> */}
            <Tab label="Menu" />
          {/* </Link> */}
          {/* <Link to="/services" className="navbar-item active"> */}
            <Tab label="Services" />
          {/* </Link> */}
          {/* <Link to="/blog" className="navbar-item active"> */}
            <Tab label="Blog" />
          {/* </Link> */}
          {/* <Link to="/about" className="navbar-item active"> */}
            <Tab label="About" />
          {/* </Link> */}
          {/* <Link to="/contact" className="navbar-item active"> */}
            <Tab label="Contact" />
          {/* </Link> */}
        </Tabs>

        <Button variant="contained" sx={{ marginLeft: "auto" }}>
          Login
        </Button>
        <Button variant="contained" sx={{ marginLeft: "10px", gap: 2 }}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
