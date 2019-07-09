const EmailAlreadyExists = (email) => {
  return {
    error: {
      message: 'Email ' + email + ' is already in use.',
      code: 2000
    }
  }
};

const BadCredentials = (email, password) => {
  return {
    error: {
      message: 'Credentials are invalid. Given email ' + email + ' and password ' + password + '.',
      code: 2001
    }
  }
};

module.exports = {
  EmailAlreadyExists,
  BadCredentials
};
