// POST /api/new-meetup

// MongoDB
import { MongoClient } from "mongodb"

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body

		const client = await MongoClient.connect(
			"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
		)

		const db = client.db()
		const meetupsCollection = db.collection("meetups")
		const result = await meetupsCollection.insertOne(data)

		client.close()

		// Send back a response
		// 201 status code: something was inserted successfully
		res.status(201).json({
			message: "Meetup inserted!",
		})
	}
}

export default handler
