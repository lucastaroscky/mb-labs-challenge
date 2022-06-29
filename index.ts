import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import databaseInitialize from './configs/database/data-source'

const app: express.Application = express()

const PORT = 3001

databaseInitialize()

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
