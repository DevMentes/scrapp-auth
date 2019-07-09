const domainErrors = require('./../errors/domainErrors');

class ChangePasswordService {

  constructor(cryptographyAdapter, userRepository) {
    this.cryptographyAdapter = cryptographyAdapter;
    this.userRepository = userRepository;
  }

  async execute(user, oldPassword, newPassword) {

    const foundedUser = await this.userRepository.byId(user.id);

    if (foundedUser && foundedUser.error){
      return foundedUser;
    }

    if (!this.cryptographyAdapter.isSame(foundedUser.password, oldPassword)) {
      return domainErrors.IncorrectPassword(oldPassword);
    }

    foundedUser.password = this.cryptographyAdapter.crypt(newPassword);

    const updatedUser = await this.userRepository.save(foundedUser);

    if (updatedUser.error) {
      return updatedUser;
    }

    return updatedUser;
  }
}

module.exports = ChangePasswordService;
