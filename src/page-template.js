const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const intern = require('../lib/Intern')
const Manager = require('../lib/Manager')

// module.exports = templateData => {
//     console.log(templateData);

    
    function generatePage(employeeArr){
        const{Employee, Manager, Engineer, Intern} = employeeArr;
        return `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Work Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>

      <body>
       <div class="container">
        <div class="row">
            <div class="col">
            ${Manager}
            ${Employee}
            ${Engineer}
            ${Intern}
            



       </body> `
    }
//}
module.exports = employeeArr => generatePage(employeeArr)
