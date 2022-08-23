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

// Dynamic page => getStaticPaths is required
// fallback: false means all the possible paths are pre-rendered and are considred in paths array
// fallback: true means, some of the most popular pages are pre-rendered, others will be pre-rendered by NextJS if they are requested.
export async function getStaticPaths() {
	// fetch path ids

	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
		],
	}
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId

	// fetch meeting datas of meetupId

	return {
		props: {
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShadNcghXHNWC9rKp7VgCTsMMVLpoReKIMCw&usqp=CAU",
			title: "The First Meetup",
			address: "Some Address 505, some City",
			description: "Our first Meetup is held in ....",
		},
	}
}
