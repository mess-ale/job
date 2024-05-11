import React from 'react';

import { AppBar, Button, Menu, MenuItem, Toolbar, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  menu: {
    position: 'relative',
    top: 100,
  },
}));

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Button
          variant="contained"
          color="secondary"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{ paper: classes.menu }} // Apply custom styling here
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleMenu;
