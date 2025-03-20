// UC-1
class Contact {
  firstName;
  lastName;
  address;
  state;
  city;
  zipCode;
  email;
  phoneNumber;

  //created constructor
  constructor(
    firstName,
    lastName,
    address,
    state,
    city,
    zipCode,
    email,
    phoneNumber
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.state = state;
    this.city = city;
    this.zipCode = zipCode;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
