let id = "1";

function getEmployee(name, country) {
  return { id: id++, name, country };
}

const employeeOne = getEmployee("Dexter", "USA");
id = 25;
const employeeTwo = getEmployee("Sasuke", "Japan");

const employess = [employeeOne, employeeTwo];

console.log(employess);
