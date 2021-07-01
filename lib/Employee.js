class Employee{
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        this.role = 'Employee'
    }
    getName() {
        return this.name
        
    }

    getId() {
        return `<span class="id"> ID:</span> ${this.id}`
    }
    
    getEmail() {
        return `<span class="email"> Email:</span> ${this.email}`
    }
    
    getRole() {
        return this.role
    }
}

module.exports = Employee;