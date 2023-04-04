import express from 'express'
import cors from 'cors'

const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/')



app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})


