import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../../utils/styles';

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.brand}>Zesh</Typography>
      </Toolbar>
    </AppBar>
  );
}
