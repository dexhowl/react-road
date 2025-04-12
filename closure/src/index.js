function getEmployeeFactory() {
  let id = "1";
  return function (name, country) {
    return {
      id: id++,
      name,
      country,
    };
  };
}

const getEmployee = getEmployeeFactory();

const employeeOne = getEmployee("Dexter", "USA");
const employeeTwo = getEmployee("Sasuke", "Japan");

const employess = [employeeOne, employeeTwo];

console.log(employess);
