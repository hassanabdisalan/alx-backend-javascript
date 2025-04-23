interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Alice",
    lastName: "Okello",
    age: 20,
    location: "Nairobi"
  };
  
  const student2: Student = {
    firstName: "Brian",
    lastName: "Kariuki",
    age: 22,
    location: "Mombasa"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Create HTML table
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'First Name';
  
  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(locationHeader);
  tableHeader.appendChild(headerRow);
  table.appendChild(tableHeader);
  
  // Table body
  const tableBody = document.createElement('tbody');
  
  studentsList.forEach((student) => {
    const row = document.createElement('tr');
  
    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
  
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });
  
  table.appendChild(tableBody);
  document.body.appendChild(table);
  