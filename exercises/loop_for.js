let students = ["Maria", "Sergio", "Daniel", "Rosa"];

function greetStudent(student) {
    console.log(`Hi ${student}`);
}

for (let i = 0; i < students.length; i++) {
    greetStudent(students[i]);
}

// Another way to go over an array is the next one
for (const student of students) {
    greetStudent(student);
}