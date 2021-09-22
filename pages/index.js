import Head from 'next/head';
import { MongoClient } from 'mongodb';
import ZeshList from '../components/zesh/ZeshList';
import { Fragment } from 'react';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Zesh App</title>
        <meta
          name="description"
          content="Define your marketing plan and visualize your resources. All in one place"
        ></meta>
      </Head>
      <ZeshList zeshes={props.zeshes} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:New16131713@cluster0.lsill.mongodb.net/Zesh?retryWrites=true&w=majority'
  );
  const db = client.db();

  const zeshCollection = db.collection('zesh');

  const zeshes = await zeshCollection.find().toArray();

  client.close();

  return {
    props: {
      zeshes: zeshes.map((zesh) => ({
        title: zesh.data.title,
        id: zesh._id.toString(),
        userPersona: zesh.data.userPersona,
        message: zesh.data.message,
        media: zesh.data.media,
        leadCapture: zesh.data.leadCapture,
        leadNurturing: zesh.data.leadNurturing,
        salesStrategy: zesh.data.salesStrategy,
        delivery: zesh.data.delivery,
        CLVincrease: zesh.data.CLVincrease,
        referrals: zesh.data.referrals,
      })),
    },
    // revalidate: 1,
  };
}

export default HomePage;
