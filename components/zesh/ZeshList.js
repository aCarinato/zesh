import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../utils/styles';
import ZeshItem from './ZeshItem';

export default function ZeshList(props) {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.cardTitle} variant="h3">
        Your Zesh List
      </Typography>
      <Grid container>
        {props.zeshes.map((zesh) => (
          <Grid key={zesh.id} item xs={12} sm={4}>
            <ZeshItem key={zesh.id} id={zesh.id} title={zesh.title} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
