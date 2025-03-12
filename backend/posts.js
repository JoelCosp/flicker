const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/list-posts', async ( req, res ) => {
    const query = "SELECT * FROM posts";
    
    db.query(query, (err, result) => {
        if (err){
            return res.status(500);
        }
        res.status(200).json(result);
    })
});

module.exports = router;