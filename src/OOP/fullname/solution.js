// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   Object.defineProperty(this, "fullName", {
//     get() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set(newValue) {
//       if (newValue) {
//         const [newFirstName, newLastName] = newValue.split(" ");
//         this.firstName = newFirstName;
//         this.lastName = newLastName;
//       }
//     },
//   });

//   this.fullName = `${this.firstName} ${this.lastName}`;
// }

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    if (!name) return;
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p = new Person("Naomi", "Wang");

console.log(p.firstName); //  "Naomi"
console.log(p.lastName); //  "Wang"
console.log(p.fullName); //  "Naomi Wang"

p.firstName = "John";
console.log(p.fullName); //  "John Wang"

p.fullName = "Jane Smith";
console.log(p.firstName); //  "Jane"
console.log(p.lastName); //  "Smith"
console.log(p.fullName); //  "Jane Smith"
