const jwt = require('jsonwebtoken');
const validator = require('./../validations/validator');
const { validationErrors } = require('./../errors/errors');
const userRepository = require('./../repositories/userRepository');
const LoginUserService = require('./../services/LoginUserService');
const cryptographyAdapter = require('../adapters/cryptographyAdapter');

module.exports = async (request, response) => {

  const {email, password} = request.body;

  if (!validator.isSet(email)) {
    response.status(400).json(validationErrors.RequiredField('Email'))
  }

  if (!validator.emailIsValid(email)){
    response.status(400).json(validationErrors.InvalidEmail(email));
  }

  if (!validator.isSet(password)) {
    response.status(400).json(validationErrors.RequiredField('Password'));
  }

  const service = new LoginUserService(
    cryptographyAdapter,
    userRepository
  );

  const authenticatedUser = await service.execute(email, password);

  if (!authenticatedUser || authenticatedUser.error) {
    response.status(401).json(authenticatedUser);
  }

  response.status(201).json({
    data: {
      token: jwt.sign(authenticatedUser, process.env.jwt_secret, {expiresIn: process.env.jwt_expiration})
    }
  });
};
