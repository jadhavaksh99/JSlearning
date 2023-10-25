class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

console.log("=Find all employees of TCS using filter() and then from final array result traverse it and log company name and employee name===");
const tcsEmp = arrayEmployees.filter( (employee) => {
    return employee.emp_company == "TCS"
})
console.log(tcsEmp);

tcsEmp.forEach(currentValue => {
    console.log(currentValue.emp_name, currentValue.emp_company);
});

console.log("===========Find average salary of employee from company Wipro=========");

const arraySalaryWipro = arrayEmployees.filter( (employee) => {
    return employee.emp_company == "Wipro"
}).map( (employee) => {
    return employee.emp_salary
})
console.log(arraySalaryWipro);
var sum = 0;
arraySalaryWipro.forEach( (salary) => {
    sum += salary;
});
let average = sum / arraySalaryWipro.length
console.log(average);

console.log("===========Find average salary of employee from company Wipro or Infy=========");

const arraySalaryWipronInfy = arrayEmployees.filter( (employee) => {
    return employee.emp_company == "Wipro" || employee.emp_company == "Infy"
}).map( (employee) => {
    return employee.emp_salary
})
console.log(arraySalaryWipronInfy);
var sum = 0;
arraySalaryWipronInfy.forEach( (salary) => {
    sum += salary;
});
average = sum / arraySalaryWipronInfy.length
console.log(average);
