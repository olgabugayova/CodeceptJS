const Factory = require('rosie').Factory;
const faker = require('faker');

module.exports = new Factory()
    .attr('name', () => faker.name.findName())
    .attr('email', () => faker.internet.email());

// module.exports = {
//     .attr('name', () => faker.name.findName())
//         .attr('email', () => faker.internet.email());
//     const PersonBuilder = function PersonBuilder() {
//         this.addFirstName = function addFirstName() {
//             this.firstName = faker.;
//             return this;
//         };
//         this.addLastName = function addLastName() {
//             this.lastName = faker.name.lastName();
//             return this;
//         };
//         this.addEmail = function addEmail ()  {
//             this.email = faker.internet.email();
//             return this;
//         };
//         this.addAddress = function addAddress() {
//             this.address = faker.address.streetName();
//             return this;
//         };
//         this.addCity = function addCity() {
//             this.city = faker.address.city();
//             return this;
//         };
//         this.addUserName = function addUserName ()  {
//             this.userName = faker.internet.userName();
//             return this;
//         };
//         this.addPassword = function addPassword() {
//             this.password = faker.internet.password();
//             return this;
//         };
//
//         this.generate = function generate() {
//             const fields = Object.getOwnPropertyNames(this);
//             const data = {};
//             fields.forEach((fieldName) => {
//                 if (this[fieldName] && typeof this[fieldName] !== 'function') {
//                     data[fieldName] = this[fieldName];
//                 }
//             });
//             return data;
//         };
//     }
// };
//
// export { PersonBuilder };
