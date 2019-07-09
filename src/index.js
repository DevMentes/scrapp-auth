const express = require('express');
const security = express();

security.use('/security', require('./routes'));

module.exports = security;