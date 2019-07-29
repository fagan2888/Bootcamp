var student = {
    name: 'David Cohen',
    class: 'Java',
    rollno: 5
};
console.log("before deleting: ");
console.log(student);

var removePropRollno = () => {
    delete student.rollno;

}
removePropRollno();
console.log("after deleting: ");
console.log(student);


