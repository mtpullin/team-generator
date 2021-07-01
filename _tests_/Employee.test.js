const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Mitch', 1 , 'mitch')

    expect(employee.name).toBe('Mitch')
    expect(employee.id).toBe(1)
    expect(employee.email).toBe('mitch')

})