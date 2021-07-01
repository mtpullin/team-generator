const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('overides role and give office number', () =>{

const employee = new Manager('Mitch', 'Manager', '123')

expect(employee.officNumber).toEqual(expect.any(Number))
expect(employee.role).toBe('Manager')
})