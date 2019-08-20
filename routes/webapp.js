const express = require('express');

const router = express.Router();

router.use('/demo', express.static('web/demo'));

module.exports = router;