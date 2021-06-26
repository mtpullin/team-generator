const inq = require('inquirer');
const Employee = require('./lib/Employee');
const generateEmployees = emplyeeArr => {}
const userPrompt = () => {
inq.prompt([{
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
}
])}

userPrompt()