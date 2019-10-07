export class Validator {

  static email(value) {
    // decision to be made -> is username@domain valid as well or just username@domain.tld
    return value ? true : false;
  }

  static required(value) {
    return value ? true : false;
  }

  static validPhoneNumber(value) {
    // regex validation for phone formatting 
    return value ? true : false;
  }
}