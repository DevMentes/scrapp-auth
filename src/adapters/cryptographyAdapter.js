const bcrypt = require('bcryptjs');

const crypt = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const isSame = (userPassword, hashedPassword) => {
  return bcrypt.compareSync(hashedPassword, userPassword);
};

module.exports = {
  crypt,
  isSame
};
