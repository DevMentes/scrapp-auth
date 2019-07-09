const { domainErrors } = require('./../errors/errors');


class RegisterUserService {

  constructor(cryptographyAdapter, uuidGeneratorAdapter, userRepository){

    this.cryptographyAdapter = cryptographyAdapter;
    this.uuidGeneratorAdapter = uuidGeneratorAdapter;
    this.userRepository = userRepository;
  }

  async execute(email, password) {

    const foundedUser = await this.userRepository.byEmail(email);

    if (foundedUser){

      if (foundedUser.error) {
        return foundedUser;
      }

      return domainErrors.EmailAlreadyExists(email);
    }

    const id = this.uuidGeneratorAdapter.generate();
    const encryptedPassword = this.cryptographyAdapter.crypt(password);

    const user = {
      id: id,
      email: email,
      password: encryptedPassword
    };

    const createdUser = await this.userRepository.create(user);

    if (createdUser.error) {
      return createdUser;
    }

    return createdUser;
  }
}

module.exports = RegisterUserService;
