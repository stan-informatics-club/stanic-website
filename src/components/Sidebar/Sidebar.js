import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Sidebar({ open, toggleSidebar }) {
  return (
    <Drawer anchor="right" open={open} onClose={toggleSidebar}>
      <IconButton onClick={toggleSidebar} sx={{ marginLeft: "auto" }}>
        <CloseIcon />
      </IconButton>
      <List sx={{ width: 250 }}>
        <ListItem button component={Link} to="/" onClick={toggleSidebar}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={toggleSidebar}>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/project" onClick={toggleSidebar}>
          <ListItemText primary="Project" />
        </ListItem>
        <ListItem button component={Link} to="/events" onClick={toggleSidebar}>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={toggleSidebar}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/faq" onClick={toggleSidebar}>
          <ListItemText primary="FAQ" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
