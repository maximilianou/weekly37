const admin = require('firebase-admin');
const app = admin.initializeApp();

//const express = require('express')
//const app = express()
app.get('/api', (req, res) => {
  res.json({ message: `Products API ${(new Date()).toISOString()}`})
})
const PORT = process.env.PORT || 7000  
app.listen( PORT, () => console.log(`Listening in http://localhost:${PORT}/api`))
