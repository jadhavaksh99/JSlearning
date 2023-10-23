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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
console.log("Find all employees from 'Wipro Company");
const empWipro = arrayEmps.filter( (employee) => {
    return employee.emp_company == "Wipro";
}).map( (employee) => {
    return employee.emp_name
})
console.log(empWipro);
console.log("Find all employees from 'IT' or 'HR' dept");
const empITnHRDept = arrayEmps.filter( (employee) => {
    return employee.emp_dept == "IT" || employee.emp_dept == "HR";
}).map( (employee) => {
    return employee.emp_name
})
console.log(empITnHRDept);
console.log("Find all employees whose emp id's are greater than 50");
const empgtfifty = arrayEmps.filter( (employee) => {
    return employee.emp_id > 50;
}).map( (employee) => {
    return employee.emp_name
})
console.log(empgtfifty);
console.log("Find all employees whose name starts with letter 'A' or 'V' or 'M' ");
const empstartAVM = arrayEmps.filter( (employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
}).map( (employee) => {
    return employee.emp_name
})
console.log(empstartAVM);

console.log("=====Find averages salary of employee for all department=====");
const empsalary = arrayEmps.filter( (employee) => {
    return employee.emp_salary;
}).map( (employee) => {
    return employee.emp_salary
})

let totalSalary = empsalary.reduce( (runningTotal, value, index) => {
    runningTotal = runningTotal + value;
    // if (index == empsalary.length -1){
    //     average = runningTotal / empsalary.length;
    // }
    
    return runningTotal;
})  
const average = totalSalary / empsalary.length;
console.log(average);

console.log("=======Find avg salary for 'IT' dept.Hint: Fliter 'IT' dept employee using filter() which return new array with only 'IT' dept employees and then use reduce() to get average===");

const arrayItSalary = arrayEmps.filter( (employee) => {
    return employee.emp_dept == "IT"
}).map( (employee) => {
    return employee.emp_salary
})
let avg = null;
salaryAverage = arrayItSalary.reduce((runningTotal, value, index) => {
    runningTotal = runningTotal + value;
    if (index == arrayItSalary.length -1 ) {
        avg = runningTotal / arrayItSalary.length;
    }
    return runningTotal;
})
console.log(avg);