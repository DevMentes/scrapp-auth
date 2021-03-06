const config = require('./../config');
const validator = require('./../validations/validator');
const { validationErrors } = require('./../errors/errors');
const jwtAuthAdapter = require('./../adapters/jwtAuthAdapter');
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
      token: jwtAuthAdapter.generateToken(authenticatedUser, config.secret, config.expiration)
    }
  });
};
