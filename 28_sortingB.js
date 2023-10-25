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

console.log("Sort the array descending and log emp_id, emp_name, emp_dept");
const ascArray = arrayEmployees.sort( (value1, value2) => {
    return value1.emp_id > value2.empid ? 1 : -1;
})
ascArray.forEach(employee => {
    console.log(employee.emp_id, employee.emp_name, employee.emp_dept);
})
console.log("================Sort array in ascending order of employee dept and log id, dept, company");
const sortedDeptArray = arrayEmployees.sort( (emp1, emp2) => {
    return emp1.emp_dept > emp2.emp_dept ? 1 : -1
})
sortedDeptArray.forEach(employee => {
    console.log(employee.emp_dept, employee.emp_id, employee.emp_company);
});

console.log("===============sort employee array in descending order of employee salary and log name, salary & company");

const salarySortedArray = arrayEmployees.sort( (e1, e2) => {
    return e1.emp_salary > e2.emp_salary ? -1 : 1
})
salarySortedArray.forEach(employee=> {
    console.log(employee.emp_name, employee.emp_salary, employee.emp_company);
});