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
  
  // Interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implementation of the function using the interface
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe")); // Output: J. Doe
  
  // Interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface for the class
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implementation of the class
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student = new StudentClass("Grace", "Hopper");
  console.log(student.displayName());     // Output: Grace
  console.log(student.workOnHomework());  // Output: Currently working
  