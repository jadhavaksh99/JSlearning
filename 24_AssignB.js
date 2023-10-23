class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vini = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vini, emp_mahi]

console.log("===============employee working in TCS ===========");
arrayEmployees.forEach(employee => {
    if (employee.emp_company == "TCS") {
        console.log(employee.emp_name, employee.emp_company);
    }
});

console.log("==============Finance Department emploee=============");
arrayEmployees.forEach(employee => {
    if (employee.emp_dept == "Finance") {
        console.log(employee.emp_dept, employee.emp_name);
    }
})
console.log("============employee starts with 'R'=============");
arrayEmployees.forEach(employee => {
    if (employee.emp_name[0] == "R") {
        console.log(employee);
    }
});
console.log("============employee salary > 75000---=============");
arrayEmployees.forEach(employee => {
    if (employee.emp_salary > 75000) {
        console.log(employee);
    }
});
console.log("============employee salary >= 50000 and from IT Dept---=============");
arrayEmployees.forEach(employee => {
    if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
        console.log(employee);
    }
});
console.log("============employee from Infy=============");
arrayEmployees.forEach(employee => {
    if (employee.emp_company == "Infy") {
        console.log(employee);
    }
});

