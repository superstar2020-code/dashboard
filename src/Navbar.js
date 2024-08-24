import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography> */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">Dashboard</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
