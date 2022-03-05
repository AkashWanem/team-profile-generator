const Employee = require('../lib/employee');

describe('Employee class', () => {
        it('should create new employee', () => {
            const employeeInstance = new Employee();
            expect(typeof(employeeInstance)).toBe('object');
        });
        it('should return employees name', () => {
            const name = 'Akash';
            const employeeInstance = new Employee(name);
            expect(employeeInstance.name).toBe(name);
            expect(employeeInstance.getName()).toBe(name);
        });
        it('should return employees ID', () => {
            const id = 553;
            const employeeInstance = new Employee('Akash', id);
            expect(employeeInstance.id).toBe(id);
            expect(employeeInstance.getId()).toBe(id);
        });
        it('should return employees Email', () => {
            const email = 'akashwanem@hotmail.com';
            const employeeInstance = new Employee('Akash', 553, email);
            expect(employeeInstance.email).toBe(email);
            expect(employeeInstance.getEmail()).toBe(email);
        });
        it('should return employees role', () => {
            const returnValue = 'Employee';
            const employeeInstance = new Employee('Akash', 2, 'akashwanem@hotmail.com');
            expect(employeeInstance.getRole()).toBe(returnValue);
        });  
  });
  