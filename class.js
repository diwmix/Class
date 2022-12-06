const todayYear = new Date().getFullYear();

class Employee {
    constructor(firstName, lastName, phoneNum, position, education, yearOfEmployment, yearOfDismissal) {
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNum = phoneNum
        this.position = position
        this.education = education
        this.yearOfEmployment = yearOfEmployment
        this.yearOfDismissal = yearOfDismissal
    }

    get position() {
        return this._position
    }
    set position(value) {
        if (['FrontEnd Developer', 'BackEnd Developer', 'HR Manager', 'UI / UX Designer'].includes(value)) this._position = value
        else this._position = false
    }

    get yearOfEmployment() {
        return this._yearOfEmployment
    }
    set yearOfEmployment(value) {
        if (value > todayYear) this._yearOfEmployment = false
        else this._yearOfEmployment = value
    }

    get yearOfDismissal() {
        return this._yearOfDismissal
    }
    set yearOfDismissal(value) {
        if (value < this._yearOfEmployment) this._yearOfDismissal = false
        else this._yearOfDismissal = value
    }
}

const employee1 = new Employee('Jacob', 'Forest', '+380684740406', 'FrontEnd Developer', 'Software engineering', 2018, 2020); 
const employee2 = new Employee('John', 'Wick', '+38039418411', 'BackEnd Developer', 'Software engineering', 2027, 2025); 
const employee3 = new Employee('Alex', 'Green', '+380683759203', 'HR Manager', 'Software engineering', 2027, 2025); 
const employee4 = new Employee('Andrew', 'Addams', '+380664829404', 'UI / UX Designer', 'Software engineering', 2027, 2025); 

console.log(employee1)
console.log(employee2)
console.log(employee3)
console.log(employee4)