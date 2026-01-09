
//Hiển thị tên và tuổi
const demo = (name, age) => `Hello ${name} you are ${age} years old.`;  
console.log(demo('Alice', 30));

//Mặc định age 18 tuổi
const greet = (name, age = 18) => `Hello ${name} you are ${age} years old.`;  
console.log(greet('Bob'));

//Hàm tính bình phương 1 số x
const square = x => x * x;  
console.log(square(5));

//Hàm in một đối tượng student bồm các thuộc tính name, age và grade
const printStudent = student => {
    console.log(`name: ${student.name} age: ${student.age} grade: ${student.grade}`);
}
let student = {name: 'Charlie', age: 20, grade: 'A'}; 
printStudent(student);

//Khai báo 1 list of students và in từng student trong list bằng hàm printStudent
const students = [
    {name: 'David', age: 21, grade: 'B'},
    {name: 'Eva', age: 22, grade: 'A'},
    {name: 'Frank', age: 20, grade: 'C'},
    {name: 'Grace', age: 23, grade: 'B'},
    {name: 'Hannah', age: 21, grade: 'A'},
    {name: 'Ian', age: 22, grade: 'C'},
    {name: 'Jack', age: 20, grade: 'B'},
    {name: 'Kathy', age: 23, grade: 'A'},
    {name: 'Leo', age: 21, grade: 'C'},
    {name: 'Mia', age: 22, grade: 'B'}
];

students.forEach(student => {
    printStudent(student);
});

for(let i = 0; i < students.length; i++) {
    printStudent(students[i]);
}

for(const student of students) {
    printStudent(student);
}
