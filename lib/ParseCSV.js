import fs from 'fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'data');

export function getData() {
	console.log(dataDirectory)
	const fileNames = fs.readdirSync(dataDirectory)
	console.log(fileNames)
}