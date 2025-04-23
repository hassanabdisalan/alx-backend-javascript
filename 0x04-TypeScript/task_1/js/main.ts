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
  
  // Logging teacher3 to the console
  console.log(teacher3);
  