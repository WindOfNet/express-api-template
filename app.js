import 'dotenv/config'
import logger from './utils/logger.js'
import express from 'express'
import echoRoute from './routes/echo.js'
import swaggerSpec from './swagger-spec.js'
import swaggerUi from 'swagger-ui-express'
import requestLogging from './middlewares/requestLogging.js'
import errorHandling from './middlewares/errorHandling.js'

const app = express()

app.use(express.json())

app.use(requestLogging)

app.use('/', echoRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get('/', (_req, res) => res.send('alive'))

app.use(errorHandling)

const port = process.env.PORT || 3000
app.listen(port, () => {
  logger.info(`app listening on port ${port}`)
})
