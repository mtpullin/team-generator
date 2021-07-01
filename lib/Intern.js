const Employee = require('./Employee')
class Intern extends Employee{
    constructor(name, id,school,email) {
        super(name, id, email)
        this.school = school
        this.role = 'Intern'
    }
    getSchool() {
        return `<span class="id"> School:</span> ${this.school}`
    }
    
}

module.exports = Intern;