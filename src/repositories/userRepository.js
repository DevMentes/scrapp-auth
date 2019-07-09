const User = require('./../models/User');

const { infrastructureErrors } = require('./../errors/errors');

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

const save = ({ id, email, password }) => {
  return User.update({ email, password }, { where: { id: id} })
    .then( updatedUser => {
      return updatedUser;
    } )
    .catch( error => {
      return {
        error: infrastructureErrors.DatabaseError(error)
      }
    })
};

const byId = (id) => {
  return User.findByPk(id)
    .then(user => {
      return user;
    })
    .catch(error => {
      return {
        error: infrastructureErrors.DatabaseError(error)
      }
    });
};

module.exports = {
  byEmail,
  create,
  byId,
  save
};
