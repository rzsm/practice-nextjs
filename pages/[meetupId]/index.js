import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetailPage(props) {
	return (
		<MeetupDetail
			image={props.image}
			title={props.title}
			address={props.address}
			description={props.description}
		/>
	)
}

export default MeetupDetailPage;

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
	);
	const db = client.db();
	const meetupCollections = db.collection('meetups');
	const meetups = await meetupCollections.find({}, {_id:1}).toArray();
	client.close();

	return {
		fallback: false,
		paths: meetups.map(meetup => {
			return {
				params: {
					meetupId: meetup._id.toString()
				}
			}

		})

	}
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		"mongodb+srv://raziyeh:EIfW6FLlb6C13PHn@cluster0.fpf1nzr.mongodb.net/test"
	);
	const db = client.db();
	const meetupCollections = db.collection('meetups');
	const selectedMeetup = await meetupCollections.findOne({_id:ObjectId(meetupId)});
	client.close();

	return {
		props: {
			id: meetupId,
			image: selectedMeetup.image,
			title: selectedMeetup.title,
			address: selectedMeetup.address,
			description: selectedMeetup.description
		},
	}
}
