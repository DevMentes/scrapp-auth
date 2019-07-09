const router = require('express').Router();

const securityController = require('./controllers/securityController');

router.get('/status', securityController.status);

router.post('/signup', securityController.signUp);

router.post('/signin', securityController.signIn);

module.exports = router;
