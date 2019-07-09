const router = require('express').Router();
const middleware = require('./middleware/middleware');

const securityController = require('./controllers/securityController');

router.get('/status',securityController.status);

router.post('/signup', securityController.signUp);

router.post('/signin', securityController.signIn);

router.patch('/password', middleware.validateToken, securityController.changePassword);

module.exports = router;
