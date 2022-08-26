import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	const router = useRouter();
	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json'
			}
		}); 

		const data = await response.json();
		console.log(data);
		router.push('/');

	}

	return (
		<>
			<Head>
				<title>New Meetup</title>
				<meta name="description" content="Schedule a nice React meetup of your own"/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	)
}

export default NewMeetupPage
