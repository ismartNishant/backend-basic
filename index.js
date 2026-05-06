require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.json({
    message: 'This is a basic Express backend deployed on Vercel.',
    version: '1.0.0'
  })
})

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const userId = Number(req.params.id)
  res.json({ id: userId, name: `User ${userId}` })
})

app.post('/users', (req, res) => {
  const newUser = req.body
  res.status(201).json({ message: 'User created', user: newUser })
})

app.get('/html', (req, res) => {
  res.type('html').send('<h1>HTML Response</h1><p>This is sent as HTML.</p>')
})

app.get('/status', (req, res) => {
  res.status(202).send('Accepted - processing request')
})

app.get('/headers', (req, res) => {
  res.set('X-Learn-Express', 'true')
  res.json({ message: 'Custom header sent', exampleHeader: 'X-Learn-Express' })
})

app.get('/redirect', (req, res) => {
  res.redirect('/about')
})

app.get('/send-status', (req, res) => {
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
