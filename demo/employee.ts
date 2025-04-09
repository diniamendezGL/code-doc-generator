class Employee {
    name: string;
    role: string;
    yearsAtGorilla: number;

    constructor(name: string, role: string, yearsAtGorilla: number) {
        this.name = name;
        this.role = role;
        this.yearsAtGorilla = yearsAtGorilla;
    }
}

function printEmployeeDetails(employee: Employee): void {
    console.log(`Name: ${employee.name}`);
    console.log(`Role: ${employee.role}`);
    console.log(`Years at Gorilla Logic: ${employee.yearsAtGorilla}`);
}

const employee = new Employee("Valery Méndez", "Senior Software Developer", 6);
printEmployeeDetails(employee);