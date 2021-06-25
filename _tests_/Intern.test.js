const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('gives intern school and overides role', () => {
    const employee = new Employee('Mitch')

    expect(employee.school).toBe(expect.any(String))
    expect(employee.role).toBe('Intern')

})