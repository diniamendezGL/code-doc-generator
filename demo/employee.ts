class Employee {
    /**
     * Represents an employee with a name, role, and years at the company.
     */
    name: string;
    role: string;
    yearsAtGorilla: number;

    constructor(name: string, role: string, yearsAtGorilla: number) {
        this.name = name;
        this.role = role;
        this.yearsAtGorilla = yearsAtGorilla;
    }
}

/**
 * Prints the details of an employee.
 * @param {Employee} employee - The employee object to print details for.
 * @returns {void}
 */
function printEmployeeDetails(employee: Employee): void {
    console.log(`Name: ${employee.name}`);
    console.log(`Role: ${employee.role}`);
    console.log(`Years at Gorilla Logic: ${employee.yearsAtGorilla}`);
}

const employee = new Employee("Valery Méndez", "Senior Software Developer", 6);
printEmployeeDetails(employee);
