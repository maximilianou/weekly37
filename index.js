const express = require('express')
const app = express()
app.get('/api/prod', (req, res) => {
  res.json({ message: `Products API ${(new Date()).toISOString()}`})
})
const PORT = process.env.PORT || 7000  
app.listen( PORT, () => console.log(`Listening in http://localhost:${PORT}/api/prod`))
