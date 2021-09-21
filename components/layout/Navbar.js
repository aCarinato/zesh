import React from 'react';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import useStyles from '../../utils/styles';

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <NextLink href="/" passHref>
          <Link color="text-primary">
            <Typography className={classes.brand}>Zesh</Typography>
          </Link>
        </NextLink>
        <div className={classes.grow}></div>
        <div className={classes.routes}>
          <NextLink href="/" passHref>
            <Link color="text-primary">
              <Typography className={classes.navLink}>Your Zesh</Typography>
            </Link>
          </NextLink>
          <NextLink href="/new-zesh" passHref>
            <Link color="text-primary">
              <Typography className={classes.navLink}>Add New Zesh</Typography>
            </Link>
          </NextLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}
