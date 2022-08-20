import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();
    const newsId = router.query.newsId;  
    
    
    return (
			<>
				<h1>The Detail Page</h1>
                <p>{`Here is all you need to know about ${newsId}`}</p>
			</>
		)
}

export default DetailPage;