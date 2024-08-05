// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(students: Student[]): void {
  // Create a table and tbody element
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  // Append the tbody to the table
  table.appendChild(tbody);

  // Iterate over the students array and create a row for each student
  students.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
