const express = require('express')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.send('Gerard sagt: Hello ALFA1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
