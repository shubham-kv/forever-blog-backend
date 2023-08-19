import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import {postsRouter} from './modules'

const app = express()

app.use(helmet())
app.use(compression())
app.use(rateLimit({
	windowMs: 1 * 60 * 60,
	max: 20
}))

app.use(express.json())

app.disable('x-powered-by')

app.get('/hello', (_, res) => {
	res.json({
		message: 'hello'
	})
})

app.use('/posts', postsRouter)

export default app
