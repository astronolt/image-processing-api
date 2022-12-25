import express from 'express'
import routes from './routes/api'
import logger from './middleware/logger'

const app = express()
const port = 3000

const middleware = [logger, routes]

app.use('/api', middleware, (req: express.Request, res: express.Response) => {
  res.status(404).send("Sorry, we couldn't find that api channel!")
})

app.use((req, res, next) => {
  res.status(404).send("Sorry, we couldn't find that!. Try again!")
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

export default app
