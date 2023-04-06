export default function createEmployeesObject(departmentName, employees) {
  const employeesMap = new Map();
  employeesMap.set(departmentName, employees);

  const employeesObj = {};
  for (const [key, value] of employeesMap.entries()) {
    employeesObj[key] = value;
  }

  return employeesObj;
}
