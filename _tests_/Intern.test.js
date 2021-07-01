const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('gives intern school and overides role', () => {
    const employee = new Intern('Mitch','Intern','UCF')

    expect(employee.school).toBe('UCF')
    expect(employee.role).toBe('Intern')

})