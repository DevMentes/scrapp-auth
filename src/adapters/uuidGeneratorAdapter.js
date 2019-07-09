const uuid = require('uuid/v4');

const generate = () => {
  return uuid();
};

module.exports = {
  generate
};