const inq = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/Employee');
const generateEmployees = employeeArr => {}
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
.then(employeeData => {
    employeeData.Employee.push(employeeData);
    if(employeeData.repeat) {
        return userPrompt(employeeData)
    }else {
        return employeeData
    }
})    
}

const generatePage = data => {
    return new Promise((resolve, reject) => {
        console.log(data)
        fs.writeFile("./dist/index.html", data, err =>{
            if(err){
                reject(err)
                return;
            }
                resolve({
                    ok: true,
                    message:'file created'
            })
        })
    })
}

userPrompt()
    .then((data) => {
     generatePage(data)})