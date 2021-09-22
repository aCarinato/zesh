import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { Fragment } from 'react';
import NewZeshForm from '../../components/zesh/NewZeshForm';

export default function NewZesh() {
  const router = useRouter();
  async function addZeshHandler(enteredZesh) {
    console.log(enteredZesh);
    const response = await fetch('/api/new-zesh', {
      method: 'POST',
      body: JSON.stringify(enteredZesh),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
  }
  return (
    <Fragment>
      <Head>
        <title>Add New Zesh</title>
        <meta name="description" content="Add a new marketing project"></meta>
      </Head>
      <NewZeshForm onAddZesh={addZeshHandler} />
    </Fragment>
  );
}
