const student = { 
    "name":"sunita shrestha",
    "sclass":10,
    "rollno":1
};
//a)list of properties
console.log("Detail of student is:",student);

//c)length of object
var l = Object.keys(student).length;
console.log("length of a student is:",l);

//b)Before and After deleting rollno
console.log("Before deleting the rollno:",student);

delete student["rollno"];
console.log("After deleting the rollno:",student);

