const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    obj = {
        a: 'thiso',
        number: 32
    }
    res.json(obj);
})

module .exports = router;