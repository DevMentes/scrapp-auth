const { infrastructureErrors } = require('./../errors/errors');

const User = require('./../models/User');

const byEmail = (email) => {

  return User.findOne({ where: { email: email } })
    .then(user => {
      return user
    })
    .catch(error => {
      return {
        error: infrastructureErrors.DatabaseError(error)
      }
    });
};

const create = ({id, email, password}) => {
  return User.create({
    id: id,
    email: email,
    password: password
  })
    .then( createdUser => {
      return createdUser;
    })
    .catch(error => {
      return {
        error: infrastructureErrors.DatabaseError(error)
      }
    })
  ;
};

module.exports = {
  byEmail,
  create
};
