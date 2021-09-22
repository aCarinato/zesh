import { MongoClient } from 'mongodb';
import ZeshList from '../components/zesh/ZeshList';

const DUMMY_ZESHES = [
  {
    id: 'z1',
    title: 'Tutto Tasse',
  },
  {
    id: 'z2',
    title: 'Itinerie',
  },
];

function HomePage(props) {
  return <ZeshList zeshes={props.zeshes} />;
}

export async function getStaticProps() {
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
        title: zesh.data,
        id: zesh._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
