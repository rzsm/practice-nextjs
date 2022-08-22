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

function HomePage() {
    return (
        <MeetupList meetups={DummyMeetups} />
    )
}

export default HomePage;