import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const { title } = data;
    const client = await MongoClient.connect(
      'mongodb+srv://admin:New16131713@cluster0.lsill.mongodb.net/Zesh?retryWrites=true&w=majority'
    );
    const db = client.db();

    const zeshCollection = db.collection('zesh');

    const result = await zeshCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Zesh inserted' });
  }
}

export default handler;
