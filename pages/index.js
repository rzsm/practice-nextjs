// NextJS
import Head from "next/head"
// MongoDB
import { MongoClient } from "mongodb"
// Components
import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Amazing React meetups provides wonderful network opportunities"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	)
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
	)

	const db = client.db()
	const meetupsCollection = db.collection("meetups")
	const meetups = await meetupsCollection.find().toArray()

	client.close()

	return {
		props: {
			meetups: meetups.map((meetup) => {
				return {
					id: meetup._id.toString(),
					image: meetup.image,
					title: meetup.title,
					address: meetup.address,
				}
			}),
		},
	}
}

export default HomePage
