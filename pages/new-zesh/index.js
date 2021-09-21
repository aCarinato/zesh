import React from 'react';
import NewZeshForm from '../../components/zesh/NewZeshForm';

export default function NewZesh() {
  const addZeshHandler = (enteredZeshName) => {
    console.log(enteredZeshName);
  };
  return <NewZeshForm onAddZesh={addZeshHandler} />;
}
