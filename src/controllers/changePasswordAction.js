const validator = require('./../validations/validator');
const validationErrors = require('./../errors/validationErrors');
const userRepository = require('./../repositories/userRepository');
const cryptographyAdapter = require('./../adapters/cryptographyAdapter');
const ChangePasswordService = require('./../services/ChangePasswordService');


module.exports = async (request, response) => {

  const loggedUser = request.user;

  const { oldPassword, newPassword } = request.body;

  if (!validator.isSet(oldPassword)) {
    response.status(400).json({error: validationErrors.RequiredField(oldPassword)});
  }

  if (!validator.isSet(newPassword)) {
    response.status(400).json({error: validationErrors.RequiredField(newPassword)});
  }

  if (!validator.isValidPassword(oldPassword)) {
    response.status(400).json({error: validationErrors.InvalidPassword(oldPassword)});
  }

  if (!validator.isValidPassword(newPassword)) {
    response.status(400).json({error: validationErrors.InvalidPassword(newPassword)});
  }

  const service = new ChangePasswordService(
    cryptographyAdapter,
    userRepository
  );

  const updatedUser = await service.execute(loggedUser, oldPassword, newPassword);

  if (updatedUser.error) {
    response.status(401).json(updatedUser);
  }

  response.status(201).json({
    message: 'Updated successfully.'
  });
};
