// Question-02: Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const studentInfo = {
    name: "Harry",
    age: 19,
    grade: 'A'
};

function gradeUpdation(updatedGrades){
    studentInfo.grade = updatedGrades;
}

gradeUpdation("A+");
console.log(studentInfo);