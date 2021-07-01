const Employee = require('./Employee')
class Manager extends Employee{
    constructor(name,officeNumber,id){
            super(name, id)
        this.officeNumber = officeNumber
        this.getRole = 'Manager'
    }
}

module.exports = Manager;