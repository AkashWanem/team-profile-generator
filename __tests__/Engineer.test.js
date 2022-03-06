const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('should return github', () => {
        const testGithub = 'ChandraChams';
        const employeeInstance = new Engineer('Chandra', 2, 'chandra@gmail.com', testGithub);
        // this creates a github object
        expect(employeeInstance.github).toBe(testGithub);
        // this tests getGithub will return gitHub
        expect(employeeInstance.getGithub()).toBe(testGithub);
    });
    it('should test role', () => {
        const returnValue = "Engineer";
        const employeeInstance = new Engineer('Chandra', 2, 'chandra@gmail.com', 'ChandraChams');
        // gets role from getRole
        expect(employeeInstance.getRole()).toBe(returnValue);
    });
});