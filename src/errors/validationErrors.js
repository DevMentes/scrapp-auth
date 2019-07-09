const RequiredField = (fieldName) => {
  return {
    error: {
      message: fieldName + ' field is required.',
      code: 1000
    }
  }
};

const InvalidPassword = (password) => {
  return {
    error: {
      message: 'Password field should have a minimum of 8 characters. Given ' + password,
      code: 1001
    }
  }
};

const InvalidEmail = (email) => {
  return {
    error: {
      message: 'Email field should be valid. Given ' + email,
      code: 1002
    }
  }
};

module.exports = {
  RequiredField,
  InvalidPassword,
  InvalidEmail
};