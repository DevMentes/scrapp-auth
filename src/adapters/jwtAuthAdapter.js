const jwt = require('jsonwebtoken');

const validateToken = (token, secret) => {

  return new Promise((resolve, reject) =>
  {
    jwt.verify(token, secret, (err, decodedToken) =>
    {
      if (err || !decodedToken)
      {
        return reject(err)
      }

      return resolve(decodedToken)
    })
  })
};

const generateToken = (payload, secret) => {
    return jwt.sign(payload, secret);
};

module.exports = {
  validateToken,
  generateToken
};
