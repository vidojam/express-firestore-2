import express from 'express'
import cors from 'cors'

import { addNewTv, getAllTv} from './src/tvLibray.js';

const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tvShows', getAllTv);
app.post('/tvShows', addNewTv);


app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})


