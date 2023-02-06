let students = ["Pedro", "Maria", "Jose", "Anna"];

function greetStudents(student) {
    console.log(`Hello ${student}`);
}

while (students.length > 0) {
    let student = students.shift();
    greetStudents(student);
}