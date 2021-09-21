import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export default function ZeshItem(props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{props.title}</Typography>
      </CardContent>
    </Card>
  );
}
