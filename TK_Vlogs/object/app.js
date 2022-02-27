var person = {
    firstName: "Hoa",
    lastName: "Mai",
    sayHello: function () {
        console.log("Hello, ", this.firstName + " " + this.lastName);
    }
}

person.sayHello();

console.log(person["firstName"]);