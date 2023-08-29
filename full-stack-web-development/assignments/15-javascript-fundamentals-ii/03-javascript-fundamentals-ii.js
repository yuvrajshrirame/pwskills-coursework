// Question-03: Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying, "Congratulations [Student Name]! You have cleared the exam."

const students = [
    {
        name: "John",
        marks: 91,
    },
    {
        name: "Peter",
        marks: 77,
    },
    {
        name: "Tom",
        marks: 99,
    },
    {
        name: "David",
        marks: 85,
    },
    {
        name: "Raven",
        marks: 50,
    }
];

const checkResults = (name) => {
    for (let student of students) {
      if (student.name === name) {
        return student.marks > 90
          ? console.log(
              `Congratulations ${student.name}! You have cleared the exam.`
            )
          : console.log(`Sorry ! You have not cleared the exam.`);
      }
    }
    console.log("Invalid User !!!");
};

checkResults("John");
checkResults("Peter");
checkResults("Ramesh Babu");

// OP:

// Congratulations John! You have cleared the exam.
// Sorry ! You have not cleared the exam.
// Invalid User !!!