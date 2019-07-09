const validator = require('./../validations/validator');
const { validationErrors } = require('./../errors/errors');
const userRepository = require('./../repositories/userRepository');
const cryptographyAdapter = require('../adapters/cryptographyAdapter');
const RegisterUserService = require('../services/RegisterUserService');
const uuidGeneratorAdapter = require('./../adapters/uuidGeneratorAdapter');

const signUp = async (request, response) => {
  const { email, password } = request.body;

  if (!validator.isSet(email)){
    response.status(400).json(validationErrors.RequiredField('Email'))
  }

  if (!validator.emailIsValid(email)){
    response.status(400).json(validationErrors.InvalidEmail(email));
  }

  if (!validator.isSet(password)){
    response.status(400).json(validationErrors.RequiredField('Password'));
  }

  if (!validator.isValidPassword(password)){
    response.status(400).json(validationErrors.InvalidPassword(password));
  }

  const service = new RegisterUserService(
    cryptographyAdapter,
    uuidGeneratorAdapter,
    userRepository
  );

  const createdUser = await service.execute(email, password);

  if (createdUser.error) {
    response.status(401).json(createdUser);
  }

  response.status(201).json({
    data: createdUser
  });
};

module.exports = signUp;
