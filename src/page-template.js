const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

const generateEmployee = employeeData => {

    let employeeCard = ''

    employeeData.forEach(employee => {
        const{name, id, role} = employee;
        let newEmployee = ''
        let roleInfo = ''

        switch(role) {

            case 'Manager':
                newEmployee = new Manager(name, id, employee.officeNumber)
                roleInfo = newEmployee.getOfficeNumber();
            case 'Engineer':
                newEmployee = new Engineer(name, id, employee.github)
                roleInfo = newEmployee.getGithub();
            case 'Intern':
                newEmployee = new Intern(name, id, employee.school)
                roleInfo = newEmployee.getSchool();
            default:
                newEmployee = new Employee(name, id)
        }

        employeeCard += `
        <div class ="column is-one-quarter-desktop"
            <div class="card">
            <div class="media">
             <div class="media-content">
             <p class="title is-3">${newEmployee.getName()}</p>
             <p class="subtitle is-5">${newEmployee.getRole()}</p>
            </div>
        </div>    

        <div class="content">
            <p>${newEmployee.getId()}<br />
            ${newEmployee.getEmail()}<br />
            ${roleInfo}</p>
                </div>
            </div>
        </div>
    </div>
        `
    })
    return employeeCard;
}
    
    const generatePage = (employeeArr) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Work Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
      </head>

      <body>
            <section class="hero is-link">
                <div class="hero-body">
                 <h2 class="title">
                    Work Team</h2>
                </div>
            </section>

            <main class="m-4">
                <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                ${generateEmployee(employeeArr)}
                </div>
            </main>
         </body>
        </html> 
       `
    }
//}
module.exports = generatePage;
