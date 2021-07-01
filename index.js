const inq = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/Employee');
const generateHTML = require('./src/page-template')
const employeeArr = []
const userPrompt = employee => {

return inq.prompt([{
    type: 'input',
    name: 'name',
    message:'What is the employees name?',
    validate: name => {
        if(name){
            return true;
        }else {
            console.log('Please enter employee name')
            return false;
        }
    }
},
{
    type:'input',
    name:'id',
    message:'What is the employee id number?',
    validate: id => {
        if(id){
            return true;
        }else {
            console.log('Please enter employee id number')
            return false;
        }
    }
},
{
    type:'list',
    name:'role',
    message:'please select employee job title',
    choices:['Manager', 'Engineer', 'Intern', 'Employee']
},
{
    type: 'input',
    name:'email',
    message:'enter employee email address',
    validate: email => {
        if(email){
            return true;
        }else {
            console.log('Please enter employee email address')
            return false;
        }
    }   
},
{
    type: 'input',
    name: 'github',
    message: 'enter github user name',
    when: ({role}) => {
        if(role === 'Engineer') {
            return true;
        }else{
            return false
        }
    }    
},
{
    type:'input',
    name:'office number',
    message:'enter manager office number',
    when: ({role}) => {
        if(role === 'Manager'){
            return true
        }else {
            return false;
        }
    }
},
{ 
    type: 'input',
    name:'school',
    message: 'enter intern school',
    when:({role}) => {
        if(role === 'Intern') {
            return true
        }else {
            return false
        }
    }
},
{
    type: 'confirm',
    name:'repeat',
    message:'Would you like to enter another employee?',
    default: true
}
])
.then(userResponse => {
    employeeArr.push(userResponse);
    if(userResponse.repeat) {
        return userPrompt()
    }else {
        return employeeArr
    }
})    
}

const generatePage = (data) => {
        return new Promise((resolve, reject)=> {
        fs.writeFile("./dist/index.html", data, err =>{
            if(err){
                reject (err)
                
            }
                resolve({
                    ok: true,
                    message: 'page created'
             })
        })
    }
)}


userPrompt()
    .then(data => generateHTML(data))
     .then(html => generatePage(html))