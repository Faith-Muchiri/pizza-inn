import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme
} from "@mui/material";
import DrawerComponent from "./DrawerComponent";

const Pages = ["Home", "Menu", "Services", "Blog", "About", "Contact"]
function NavBar() {
  const [value, setValue] = useState();
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  // console.log(theme)
  return (
    <AppBar position="static" sx={{ background: "black", padding: "10px" }}>
      <CssBaseline />
      <Toolbar>
        <LocalPizzaIcon />
        {isMatch ? (
          <>
            <DrawerComponent />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {Pages.map((page, index) => (
                <Tab key={index} label={page} />
              ))}
            </Tabs>

            <Button variant="contained" sx={{ marginLeft: "auto" }}>
              Login
            </Button>
            <Button variant="contained" sx={{ marginLeft: "10px", gap: 2 }}>
              Signup
            </Button>
          </>
        )}
        {/* <Typography variant="h6">🍕Pizza Delicious</Typography> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
