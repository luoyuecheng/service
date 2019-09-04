const express = require('express');

const router = express.Router();

router.use('/demo', express.static('web/demo'));

router.use('/blog', express.static('web/blog'));

module.exports = router;