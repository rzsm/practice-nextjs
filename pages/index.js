import MeetupList from "../components/meetups/MeetupList";

const DummyMeetups = [
	{
		id: "m1",
		title: "The First Meetup",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShadNcghXHNWC9rKp7VgCTsMMVLpoReKIMCw&usqp=CAU",
		address: "Some Address 202, 1666 Some City",
		description: "This is a first meetup",
	},
	{
		id: "m2",
		title: "The Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stpaul001.jpg/330px-Stpaul001.jpg",
		address: "Some Address 204, 1646 Some City",
		description: "This is a second meetup",
	},
]

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />
}

// built-in pre-rendering feature first execute getStaticProps and provides props for HomePage
// then renders the <MeetupList /> so we have our fetched data on the pre-rendered page (SEO)
// getStaticProps() only executes during build process, not sent to client side
// so we can access a file system here or securely connect to a database

export async function getStaticProps() {
	// fetch data from an API
	return {
		props: {
			meetups: DummyMeetups,
		},
		// One problem: What if our content changed, then pre-rendered page would be out-dated
		// solution: manually build and deploy whenever you have new data (like good for personal blog)
		// solution2: set revalidate property in the object returned by getStaticProps, it gets the seconds in which you need server to re-build and re-prerender (update regularly)
		// revalidate: 3600
	}
}

export default HomePage;

// if we do not use getStaticProps and handle fetching initial data with useState and useEffect,
// then the initial pre-rendered page would not have initial loaded data
// since server-side pre-rendering feature renders what will execute on the first rendering cycle of the app not the second one
