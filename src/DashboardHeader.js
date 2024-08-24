import React from 'react';
import { Grid, Button, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SyncIcon from '@mui/icons-material/Sync';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
const DashboardHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="h5" sx={{marginLeft:"30px", fontWeight:"bold"}}>CNAPP Dashboard</Typography>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Button variant="outlined">
             Add Widget +
          </Button>
        </Grid>
        <Grid item>
      <Button variant="outlined">
      <SyncIcon/>
      </Button>
    </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleMenuClick}>
            <MoreVertIcon />
          </Button>
        </Grid>
        <Grid item>
      <Button variant="outlined">
        <WatchLaterIcon />
        <span style={{ margin: '0 8px' }}>|</span>
        Last 2 Days
      </Button>
    </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardHeader;
