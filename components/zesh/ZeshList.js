import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useRouter } from 'next/router';
import useStyles from '../../utils/styles';
import ZeshItem from './ZeshItem';

export default function ZeshList(props) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.cardTitle} variant="h3">
        Your Zesh List
      </Typography>
      <Grid container>
        {props.zeshes.map((zesh) => (
          <Grid key={zesh.id} item xs={12} sm={4}>
            <div
              className={classes.zeshLink}
              onClick={() => {
                router.push('/' + zesh.id);
              }}
            >
              <ZeshItem key={zesh.id} id={zesh.id} title={zesh.title} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
