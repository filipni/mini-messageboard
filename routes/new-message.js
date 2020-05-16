var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('new-message', {});
})

module.exports = router;