const Employee = require('./Employee')
class Engineer extends Employee{
    constructor(name,id , github, email) {
        super(name, id, email)
        this.github = github
        this.role = 'Engineer'
    }
    getGithub(){
        return `<span class="github">Github:</span> 
        <a href="https://github.com/${this.github}" target="_blank" class="is-link"> ${this.github}</a>`
    }

}

module.exports = Engineer