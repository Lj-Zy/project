var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return person.firstName + person.lastName + this.middleInitial;
}
var user = new Student("李杰", "李滢", "喜欢");
document.body.innerHTML = greeter(user);
