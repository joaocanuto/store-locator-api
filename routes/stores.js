const express = require('express');
const router = express.Router();

router.get('/api/v1/stores', (req,res) => {
    res.send('Hello');
})

module.exports = router;
