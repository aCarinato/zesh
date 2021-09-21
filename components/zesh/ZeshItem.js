import { Card, CardContent, Typography } from '@material-ui/core';
import classes from './ZeshItem.module.css';
import React from 'react';

export default function ZeshItem(props) {
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography variant="h4">{props.title}</Typography>
      </CardContent>
    </Card>
  );
}
