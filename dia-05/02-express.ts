import express, { Request, Response } from 'express'
//const express = require('express')

const app = express()

app.get('/status', (req: Request, res: Response) => {
  res.status(200).send({ola: "Mundo"})
})



app.listen(8080, () => {
  console.log('Server is running!')
})