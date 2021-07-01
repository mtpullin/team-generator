const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Mitch')

    expect(employee.name).toBe('Mitch')
    expect(employee.id).toBe(expect.any(Number))
    expect(employee.email).toBe('mitch')

})