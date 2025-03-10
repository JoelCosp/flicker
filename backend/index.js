const express = require('express')
const pool = require('./db');

const app = express()

const port = 5000;

// INSERT INTO THE DATABASE ROUTE HERE
app.post('/create-role', async(req, res) => {
    // The data to be stored in the database
    try {
      await pool.query(
        'INSERT INTO roles (name) VALUES ("Admin")',
      );
  
      res.status(200).json("Role has been added");
      
    } catch (error) {
      console.log('failed')
      res.status(400).json(error.message)
    }
  })

// GET DATA FROM THE DATABASE ROUTE HERE 

  
  // Start the Express server
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });