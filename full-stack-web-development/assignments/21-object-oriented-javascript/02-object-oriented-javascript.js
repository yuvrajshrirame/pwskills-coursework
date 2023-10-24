// Question-02: Create a student enrollment system using JavaScript classes. Implement two classes, Student and Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class should have methods for enrolling in courses and displaying enrolled courses, while the Admission class should handle student enrollments, course admission, and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to the specified requirements provided.

class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.enrolledCourses = [];
    }

    enrollInCourse(course) {
        this.enrolledCourses.push(course);
    }

    showEnrolledCourses() {
        const enrolledCourses = this.enrolledCourses.join(", ");
        return `${this.name}'s enrolled courses: ${enrolledCourses}`;
    }
    }

    class Admission {
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        this.students.push(student);
    }

    assignCourse(student, course) {
        student.enrollInCourse(course);
    }

    showEnrolledStudents() {
        const enrolledStudents = this.students.map(
        (student) => `${student.name} (${student.email})`
        );
        return `Enrolled students:\n${enrolledStudents.join("\n")}`;
    }
}

const admissionOffice = new Admission();

const student1 = new Student("John", "john@gmail.com");
const student2 = new Student("Sam", "sam@gmail.com");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1, "Full Stack Web Development");
admissionOffice.assignCourse(student2, "Data Science Masters");

console.log(student1.showEnrolledCourses()); // John's enrolled courses: Full Stack Web Development
console.log(student2.showEnrolledCourses()); // Sam's enrolled courses: Data Science Masters

console.log(admissionOffice.showEnrolledStudents());