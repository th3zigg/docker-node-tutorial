'use strict'

const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.status(200).end('Hello from Node')
})

server.listen(process.env.PORT || 3030)
