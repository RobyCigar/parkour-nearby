import { useRouter } from 'next/router'

export default function SpotDetail() {
	const router = useRouter()
	const { spotId } = router.query;
	return (
		<>
			<p>{spotId}</p>
			<h1>Hi</h1>
		</>
	)
}
