export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employees = [];

  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employees = employees.concat(allEmployees[department]);
    }
  }

  return {
    [Symbol.iterator]: function* () {
      for (const employee of employees) {
        yield employee;
      }
    },
  };
}
