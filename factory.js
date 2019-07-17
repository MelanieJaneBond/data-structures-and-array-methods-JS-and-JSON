//Complete the function below called `contactFactory`:
//`contactFactory` returns an object with three properties: name, title, email.
//Make `contactFactory` take a single argument, which will be treated as an array.
// In the body of the function, loop over that array to set the values of the object's properties.

function contactFactory(contactData) {
    let contact = {
      name: null,
      title: null,
      email: null
    }
    for (let i=0; i < contactData.length; i++) {
       //add each arry item to contact
    function contactData(string1, string2, string3) {
      let string1 = contact.name
      let string2 = contact.title
      let string3 = contact.email
     }
    return contact
  }

let contactData = []

function createContact(name, title, email) {
let newContact = 
contactData.push(name, title, email)
console.table(Contact)
contactFactory(newContact)
}

createContact("melanie", "sister", "missbme@nothing.com")

// This is a factory function. It returns a new object every time.
const createLocation = (name, address, type) => ({
  "businessType": type,
  "businessName": name,
  "address": address
})

const kennel = createLocation("Bow Wow Kennels", "100 Infinity Way", "Animal Boarding")
> { "businessType": "Animal Boarding", "businessName": "Bow Wow Kennels", "address": "100 Infinity Way" }

// 2. Complete the second function called `createContact`:
// * createContact takes three arguments: name, title, email.
// * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

// 3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.