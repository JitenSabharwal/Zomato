const express = require('express')
const app = express()
const zomato = require('./routes/zomato')
app.use('/zomato', zomato)
app.listen(9080, () => {
  console.log('App. started')
})