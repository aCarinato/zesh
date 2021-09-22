import { useRouter } from 'next/router';
import React from 'react';
import NewZeshForm from '../../components/zesh/NewZeshForm';

export default function NewZesh() {
  const router = useRouter();
  async function addZeshHandler(enteredZeshName) {
    console.log(enteredZeshName);
    const response = await fetch('/api/new-zesh', {
      method: 'POST',
      body: JSON.stringify(enteredZeshName),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  }
  return <NewZeshForm onAddZesh={addZeshHandler} />;
}
