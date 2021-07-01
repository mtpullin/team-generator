const Employee = require('./Employee')
class Manager extends Employee{
    constructor(name,officeNumber,id){
            super(name, id)
        this.officeNumber = officeNumber
        this.getRole = 'Manager'
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;