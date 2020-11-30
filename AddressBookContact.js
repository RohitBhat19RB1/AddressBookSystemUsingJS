class AddressBookContact {
    // property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName ;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email; 
    }
    //getter and setter method
    get firstName() {return this.firstName;}
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegex.test(firstName))
          this.firstName = firstName;
        else throw 'first name is incorrect!';
    }

    get lastName() {return this.lastName;}
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName))
          this.lastName = lastName;
        else throw 'last name is incorrect!';
    }

    get address() {return this.address;}
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if (addressRegex.test(address))
          this.address = address;
        else throw 'address is incorrect!';
    }

    get city() {return this.city;}
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city))
          this.city = city;
        else throw 'city is incorrect!';
    }

    get state() {return this.state;}
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state))
          this.state = state;
        else throw 'state is incorrect!';
    }

    get zip() {return this.zip;}
    set zip(zip) {
        let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if (zipRegex.test(zip))
          this.zip = zip;
        else throw 'zip is incorrect!';
    }

    get phoneNumber() {return this.phoneNumber;}
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^(\\d{2})\\-([6-9]{1}\\d{9})$');
        if (phoneNumberRegex.test(phoneNumber))
          this.phoneNumber = phoneNumber;
        else throw 'phoneNumber is incorrect!';
    }

    get email() {return this.email;}
    set email(email) {
        let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if (emailRegex.test(email))
          this.email = email;
        else throw 'email is incorrect!';
    }

    //method
    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zip+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }
}

const addressBookContainer = new Map();

let addressBookContact = new AddressBookContact("Raju", "Kumar", "Seawoods", "Navi-Mumbai", "Maharashtra", 1004, 55226655, "raju@gmail.com");
let newAddressBookContact = new AddressBookContact("Sanoj", "Kumar", "Malviya-Nagar", "Saket", "Delhi", 8904, 97226698, "sanoj@gmail.com")
addressBookContainer.set(addressBookContact.firstName, addressBookContact);
addressBookContainer.set(newAddressBookContact.firstName, newAddressBookContact);

console.log(addressBookContacts.toString());
try{
    addressBookContacts.firstName = "Rajan";
    console.log(addressBookContacts.toString());
} catch (e) {
    console.error(e);
}

let box = new AddressBookContacts();
box = addressBookContainer.get("Raju");
box.lastName = "Sharma";
console.log(addressBookContainer.get("Raju"))

addressBogitokContainer.delete("Sanoj");
console.log(addressBookContainer)

console.log(addressBookContainer.size);

let convert = Array.from(addressBookContainer.values()) 

convert.forEach((data) => {
  console.log(data);
  if (data.city == "Saket" && data.state == "Delhi" && data.zip === 8904){
      console.log("sorted:"+data)

  }
})