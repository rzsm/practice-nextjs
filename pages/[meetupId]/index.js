// NextJS
import Head from "next/head"
// MongoDB
import { MongoClient, ObjectId } from "mongodb"
// Component
import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetailPage(props) {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
			</Head>
			<MeetupDetail
				image={props.image}
				title={props.title}
				address={props.address}
				description={props.description}
			/>
		</>
	)
}

export default MeetupDetailPage

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
	)
	const db = client.db()
	const meetupCollections = db.collection("meetups")
	const meetups = await meetupCollections.find({}, { _id: 1 }).toArray()
	client.close()

	return {
		fallback: "blocking",
		paths: meetups.map((meetup) => {
			return {
				params: {
					meetupId: meetup._id.toString(),
				},
			}
		}),
	}
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId

	const client = await MongoClient.connect(
		"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
	)
	const db = client.db()
	const meetupCollections = db.collection("meetups")
	const selectedMeetup = await meetupCollections.findOne({
		_id: ObjectId(meetupId),
	})
	client.close()

	return {
		props: {
			id: meetupId,
			image: selectedMeetup.image,
			title: selectedMeetup.title,
			address: selectedMeetup.address,
			description: selectedMeetup.description,
		},
	}
}
