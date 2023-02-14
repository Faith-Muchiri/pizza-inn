import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Pages = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
  { name: "Logout", path: "/logout" },
];

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {Pages.map((page, index) => (
            <Link to={page.path} key={index} style={{ textDecoration: "none" }}>
              <ListItemButton onClick={() => setOpenDrawer(false)}>
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
