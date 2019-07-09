const emailIsValid = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());

};

const isSet = (field) => {
  return field || field !== '';
};

const isValidPassword = (password) => {
  return password.length >= 8;
};


module.exports = {
  emailIsValid,
  isSet,
  isValidPassword
};
