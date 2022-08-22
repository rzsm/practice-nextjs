// _app.js is the root element of the Nextjs
// Component and pageProps are passing automatically
// Component: will be the actual page content of our different pages and it will change whenever we navigate from page A to page B
// So we can wrap <Component /> with our wrapper and then don't do that inside of different page files
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
