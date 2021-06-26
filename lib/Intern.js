const Employee = require('./Employee')
class Intern extends Employee{
    constructor(name, school) {
        super(name)
        this.school = school
        this.getRole = 'Intern'
    }
    getSchool() {

    }
    
}

module.exports = Intern;