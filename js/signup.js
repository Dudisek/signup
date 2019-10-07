import { Validator } from './validator.js';

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  let firstName = document.getElementById('signup-fname').value;
  let email = document.getElementById('signup-email').value;
  let address = document.getElementById('signup-address').value;

  let signUpForm = new SignUp(firstName, email, address);
  signUpForm.createUser();
})


export class SignUp {
  constructor(name, email, address) {
    this.name = name;
    this.email = email;
    this.address = address;
  }

  createUser() {
    if (Validator.required(this.name) && Validator.required(this.address) && Validator.email(this.email)) {
      console.log('valid');
      // ajax post request, callback or return promise
    } else {
      console.log('invalid')
    }
  }
}