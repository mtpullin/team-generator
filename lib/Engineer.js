const Employee = require('./Employee')
class Engineer extends Employee{
    constructor(name, github, id) {
        super(name, id)
        this.github = github
        this.role = 'Engineer'
    }
    getGithub(){
        return `<span class="github">Github:</span> <a href="https://github.com/${this.github}" 
        target="_blank"${this.github}</a>`
    }

}

module.exports = Engineer