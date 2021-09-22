import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

import ZeshItemDetails from '../../components/zesh/ZeshItemDetails';

function ZeshDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.zeshData.title}</title>
      </Head>
      <ZeshItemDetails title={props.zeshData.title} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:New16131713@cluster0.lsill.mongodb.net/Zesh?retryWrites=true&w=majority'
  );
  const db = client.db();

  const zeshCollection = db.collection('zesh');

  const zeshes = await zeshCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: zeshes.map((zesh) => ({ params: { zeshId: zesh._id.toString() } })),
  };
}

export async function getStaticProps(context) {
  const zeshId = context.params.zeshId;

  const client = await MongoClient.connect(
    'mongodb+srv://admin:New16131713@cluster0.lsill.mongodb.net/Zesh?retryWrites=true&w=majority'
  );
  const db = client.db();

  const zeshCollection = db.collection('zesh');

  const selectedZesh = await zeshCollection.findOne({ _id: ObjectId(zeshId) });

  client.close();

  return {
    props: {
      zeshData: {
        id: selectedZesh._id.toString(),
        title: selectedZesh.data.title,
      },
    },
  };
}

export default ZeshDetails;
