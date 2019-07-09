const signUp = require('./signUpUserAction');
const signIn = require('./signInUserAction');
const changePassword = require('./changePasswordAction');

const status = async (request, response) => {
  response.status(200).json({message:"Security module is working fine."});
};

module.exports = {
  status,
  signUp,
  signIn,
  changePassword
};
