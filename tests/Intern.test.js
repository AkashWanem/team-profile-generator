const Intern = require('../lib/Intern');

describe('intern class', () => {
    it('should return school', () => {
        const testSchool = 'George Eliot School';
        const employeeInstance = new Intern('Keshar', 5, 'keshar@gmail.com', testSchool);
        // this creates a school object
        expect(employeeInstance.school).toBe(testSchool);
        // this tests getSchool will return school
        expect(employeeInstance.getSchool()).toBe(testSchool);
    });
    it('should test role', () => {
        const returnValue = 'Intern';
        const employeeInstance = new Intern('Keshar', 5, 'keshar@gmail.com', 'George Eliot School');
        // gets role from getRole
        expect(employeeInstance.getRole()).toBe(returnValue);
    });
})