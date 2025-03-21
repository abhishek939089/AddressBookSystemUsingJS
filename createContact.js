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

//UC2
var addressBook = new Array();

function contactDetails(
  firstName,
  lastName,
  address,
  state,
  city,
  zipCode,
  email,
  phoneNumber
) {
  //checking duplicate
  addressBook
    .filter((contact) => contact.firstName == firstName)
    .reduce(() => count++, (count = 0));
  if (count > 0) {
    console.log("Contact With Name " + firstName + " Already Present");
  } else {
    const firstNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let firstName_Check = firstNamePattern.test(firstName);

    const lastNamePattern = /^[A-Z][a-zA-Z]{3,}/;
    let lastName_Check = lastNamePattern.test(lastName);

    const addressPattern = /^[A-Za-zA-Z0-9]{3,}/;
    let address_Check = addressPattern.test(address);

    const statePattern = /^[A-Za-zA-Z]{3,}/;
    let state_Check = statePattern.test(state);

    const cityPattern = /^[A-Za-zA-Z]{3,}/;
    let city_Check = cityPattern.test(city);

    const zipCodePattern = /^[0-9]{6}/;
    let zipCode_Check = zipCodePattern.test(zipCode);

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let email_Check = emailPattern.test(email);

    const phoneNumberPattern = /^[0-9]{10}/;
    let phoneNumber_Check = phoneNumberPattern.test(phoneNumber);

    if (
      firstName_Check == true &&
      lastName_Check == true &&
      address_Check == true &&
      state_Check == true &&
      city_Check == true &&
      zipCode_Check == true &&
      email_Check == true &&
      phoneNumber_Check == true
    ) {
      let newContact = new Contact(
        firstName,
        lastName,
        address,
        state,
        city,
        zipCode,
        email,
        phoneNumber
      );
      console.log("Contact Added Successfully");

      addressBook.push(newContact);
    } else {
      throw "Contact Details Are Invalid";
    }
  }
}

//UC3
contactDetails(
  "Abhishek",
  "Sharma",
  "Home",
  "Uttar Pradesh",
  "Mathura",
  "281406",
  "abhishek@gmail.com",
  "3345452525"
);
console.log(addressBook);

//UC4

//method to find and editContacts
function editContact(findName, editedVariable, variableNewValue) {
  if (addressBook.length == null) {
    console.log("Add Contact In Address Book");
  } else {
    addressBook.forEach((newContact) => {
      if (newContact.firstName == findName) {
        switch (editedVariable) {
          case "firstName":
            newContact.firstName = variableNewValue;
            break;
          case "lastName":
            newContact.lastName = variableNewValue;
            break;
          case "address":
            newContact.address = variableNewValue;
            break;
          case "state":
            newContact.state = variableNewValue;
            break;
          case "city":
            newContact.city = variableNewValue;
            break;
          case "zipCode":
            newContact.zipCode = variableNewValue;
            break;
          case "firstName":
            newContact.firstName = variableNewValue;
            break;
          case "lastName":
            newContact.lastName = variableNewValue;
            break;
        }
      }
    });
  }
}

//UC5

//method to delete
function deleteContact(first_Name) {
  if (addressBook.length == null) {
    console.log("Add Contact In Address Book");
  } else {
    for (let i = 0; i < addressBook.length; i++) {
      if (addressBook[i].firstName == first_Name) {
        addressBook.splice(i, 1);
        console.log("Contact Deleted Successfully");
      }
    }
  }
}

//UC 6

//creating a function to calculate number of contacts in addressbook using reduce() method
function numberOfContacts() {
  return addressBook.reduce((total) => total + 1, 0);
}

console.log(
  "Total number of contacts inside address book is : " + numberOfContacts()
);

// UC7

//method for Duplicate Check Function
function isDuplicate(firstName) {
  // Filter matching names
  let duplicates = addressBook.filter(
    (contact) => contact.firstName === firstName
  );
  // Reduce to count duplicates
  let duplicateCount = duplicates.reduce((count) => count + 1, 0);
  return duplicateCount > 0;
}

//UC 8

// method to Search Contact
function searchByCity_State(choice, name) {
  if (choice == "city") {
    person = addressBook
      .filter((contact) => contact.city == name)
      .map((contact) => contact.firstName);
    console.log("Contact Found Who Is From " + name);
    console.log(person);
  } else if (choice == "state") {
    person = addressBook
      .filter((contact) => contact.state == name)
      .map((contact) => contact.firstName);
    console.log("Contact Found Who Is From " + name);
    console.log(person);
  } else {
    console.log("Provide Right City or State Name");
  }
}
