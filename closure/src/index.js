function getEmployee(name, country) {
  return { name, country };
}

const employeeOne = getEmployee("Dexter", "USA");
const employeeTwo = getEmployee("Sasuke", "Japan");

const employess = [employeeOne, employeeTwo];

console.log(employess);
