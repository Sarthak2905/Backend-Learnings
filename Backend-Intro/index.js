const express = require('express')
const app = express()
const port = 3000

// import item ki router file
const item = require('./routes/item')
const birds = require('./routes/birds')

// load into application file
app.use('/api',item)
app.use('/filter',birds)

// --> /api/ -> item home page
// --> /api/items -> item post request
// --> /api/item/:id -> put/delete request 

app.listen(port, () => {
  console.log(`Sarthak app listening on port ${port}`)
})