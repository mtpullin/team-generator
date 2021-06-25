const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('overides role and give office number', () =>{

const employee = new Employee('Mitch')

expect(employee.officNumber).toBe(expect.any(Number))
expect(employee.role).toBe('Manager')
})