import React from 'react';
import Navbar from './Navbar';
import { Container } from '@material-ui/core';
import useStyles from '../../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container className={classes.main}>{children}</Container>
    </div>
  );
}
