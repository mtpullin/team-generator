const Employee = require('./Employee')
class Manager extends Employee{
    constructor(name,id, officeNumber, email){
            super(name, id, email)
        this.officeNumber = officeNumber
        this.role = 'Manager'
    }
    getOfficeNumber() {
        return `<span class="id"> Office Number:</span> ${this.officeNumber}`
    }
}

module.exports = Manager;