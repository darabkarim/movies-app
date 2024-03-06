import { Toolbar, AppBar,Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{padding:"0px 50px"}} variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Movie List  App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
