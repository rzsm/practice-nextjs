// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        
        // Error handling can be added to this code
        // This gives us a connected client:
        const client = await MongoClient.connect(
					"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
				);

        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        
        client.close();

        // Send back a response
        // 201 status code: something was inserted successfully
        res.status(201).json({
            message: "Meetup inserted!"
        })
    }
}

export default handler;




