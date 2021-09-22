import { useState } from 'react';

import { Button, Container, TextField, Typography } from '@material-ui/core';
import React from 'react';
import classes from './NewZeshForm.module.css';

export default function NewZeshForm(props) {
  //   const submittedTitle = useRef();
  const [title, setTitle] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    const zeshData = {
      title: title,
      userPersona: {},
      message: {},
      media: {},
      leadCapture: {},
      leadNurturing: {},
      salesStrategy: {},
      delivery: {},
      CLVincrease: {},
      referrals: {},
    };
    props.onAddZesh(zeshData);
  };
  return (
    <Container size="sm">
      <Typography variant="h6" gutterBottom>
        Create a New Zesh
      </Typography>
      <form className={classes.myForm} onSubmit={submitHandler}>
        <TextField
          fullWidth
          label="Project Name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={classes.submitButton}>
          <Button type="submit" color="secondary" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
}
