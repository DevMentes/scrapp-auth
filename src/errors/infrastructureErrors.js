const DatabaseError = (error) => {
  return {
    error: {
      message: error,
      code: 3000
    }
  }
};
module.exports = {
  DatabaseError
};