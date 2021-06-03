import { useRouter } from 'next/router'
import { getData } from '../../lib/ParseCSV'

export default function SpotDetail() {
	const router = useRouter()
	const { spotId } = router.query;
	return (
		<>
			<p>{spotId}</p>
			<h1>FUCK</h1>
		</>
	)
}

export async function getStaticPaths() {
	const paths = getData()
	console.log(paths)
	return {
		props: {data: "shit"}
	}
}