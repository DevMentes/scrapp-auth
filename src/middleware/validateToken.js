const jwtAuthAdapter = require('./../adapters/jwtAuthAdapter');
const config = require('./../config');

validateToken = (req, res, next) => {

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }

  if (authorizationHeader.slice(0, 7) !== 'Bearer ') {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }

  const jwt = authorizationHeader.split( ' ')[1];

  if (!jwt) {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }

  jwtAuthAdapter.validateToken(jwt, config.secret, config.expiration)
    .then((decodedToken) =>
    {
      req.user = decodedToken.user;
      next();
    })
    .catch((error) =>
    {
      res.status(401)
        .json({message: error})
    });
};

module.exports = validateToken;
