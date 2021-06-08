import axios from 'axios'

export const getGoogleKey = async () => {
	return await axios({
		method: 'GET',
		url: 'api/hello'
	}).then(res => {
		console.log(res)
		return res
	})
	.catch(error => {
		console.log(error)
	})
}

export const getCsvFromAPI = async () => {
	return await axios({
		method: 'GET',
		url: 'api/data',
	}).then(res => {
		return res.data.data
	})
	.catch(error => {
		console.log(error)
	})
}