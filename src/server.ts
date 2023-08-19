import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import {appConfig} from './configs'

import {connectToMongo} from './loaders'

;(async function bootstrap() {
	const {port} = appConfig

	await connectToMongo()

	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}...`)
	})
})()