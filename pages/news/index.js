// important: by Link you can navigate around your SPA without any request for new HTML page
// Although any path in our app that might be searched or entered directly from the begining,
// Is supported by the server-side pre-rendering feature so visible by search engine crawlers
import Link from "next/link"

function NewsPage() {
	return (
		<>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/latest-react-articles">Latest React Articles</Link>
				</li>
				<li>
					<Link href="/news/key-feauters-of-nextjs">
						Key Features of NextJS
					</Link>
				</li>
			</ul>
		</>
	)
}

export default NewsPage
