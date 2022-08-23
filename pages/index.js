import MeetupList from "../components/meetups/MeetupList"

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

// alternative for getStaticProps() (SSG) is SSR by getServerSideProps()
// SSR = SSG : both are not sent to client-side, secure credentials can be used
// SSR > SSG : accessing req and res objects
// SSR > SSG : if you want to regenerate the page for every incoming request
// SSG > SSR : SSG is faster, takes advantage of caching the ready pages, using CDNs
// summary: if you need req or res, or data update frequency is more than per second ==> SSR
// otherwise ==> SSG is better
export async function getServerSideProps(context) {
	const req = context.req
	const res = context.res
	// fetch data from an API
	return {
		props: {
			meetups: DummyMeetups,
		},
	}
}

// export async function getStaticProps() {
// 	// fetch data from an API
// 	return {
// 		props: {
// 			meetups: DummyMeetups,
// 		}
// 	}
// }

export default HomePage
