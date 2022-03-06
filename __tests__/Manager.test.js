const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('should return officeNumber', () => {
        const testOfficeNumber = 10;
        const employeeInstance = new Manager('Misan', 3, 'misan@gmail.com', testOfficeNumber);
        // this creates a officeNumber object
        expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
        // this tests getOfficeNumber will return officeNumber
        expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
    });
    it('should test role', () => {
        const returnValue = 'Manager';
        const employeeInstance = new Manager('Misan', 3, 'misan@gmail.com', 10);
        // gets role from getRole
        expect(employeeInstance.getRole()).toBe(returnValue);
    });
});