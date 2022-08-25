// Nice Smart Feature of NextJS:
// recognizes the following import is for server-side code part of this file
// so doesn't bundle it for sending to client-side
import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
	// although NestJS let us use fetch in the server-side code,
	// there is no need to, we can connect directly to the database here

	const client = await MongoClient.connect(
		"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
	);

	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();
	console.log(meetups);

	client.close();

	return {
		props: {
			meetups: meetups.map(meetup => {
				return {
					id: meetup._id.toString(),
					image: meetup.image,
					title: meetup.title,
					address: meetup.address
				}
			}),
		},
	}
}

export default HomePage
