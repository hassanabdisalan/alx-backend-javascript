// Define MajorCredits and MinorCredits interfaces
interface MajorCredits {
    credits: number;
    brand: string; // Unique identifier for MajorCredits
  }
  
  interface MinorCredits {
    credits: number;
    brand: string; // Unique identifier for MinorCredits
  }
  
  // Define the sumMajorCredits function
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
      credits: totalCredits,
      brand: 'MajorCredits' // Return the unique brand for MajorCredits
    };
  }
  
  // Define the sumMinorCredits function
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
      credits: totalCredits,
      brand: 'MinorCredits' // Return the unique brand for MinorCredits
    };
  }
  
  // Example usage
  const major1: MajorCredits = { credits: 30, brand: 'MajorCredits' };
  const major2: MajorCredits = { credits: 40, brand: 'MajorCredits' };
  const minor1: MinorCredits = { credits: 15, brand: 'MinorCredits' };
  const minor2: MinorCredits = { credits: 10, brand: 'MinorCredits' };
  
  const totalMajorCredits = sumMajorCredits(major1, major2);
  const totalMinorCredits = sumMinorCredits(minor1, minor2);
  
  console.log('Total Major Credits:', totalMajorCredits);
  console.log('Total Minor Credits:', totalMinorCredits);
  