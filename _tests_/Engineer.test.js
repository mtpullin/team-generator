const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('gives github username and overrides role', () => {
    const employee = new Employee('Mitch')

    expect(employee.github).toBe(expect.any(String))
    expect(employee.role).toBe('Engineer')
})