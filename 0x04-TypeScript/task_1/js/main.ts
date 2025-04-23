// Defining the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // optional attribute
    location: string;
    [key: string]: any; // This allows additional attributes
  }
  
  // Initializing teacher3 with the Teacher interface
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Adding extra attribute 'contract'
  };
  
  console.log(teacher3);
  
  // -------------------------------------------
  // ADD THIS BELOW THE EXISTING CODE:
  
  // Defining the Directors interface extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Creating a director1 object using the Directors interface
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  