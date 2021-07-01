const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

test('gives github username and overrides role', () => {
    const employee = new Engineer('Mitch', 'Engineer', 'github')

    expect(employee.github).toBe('github')
    expect(employee.role).toBe('Engineer')
})