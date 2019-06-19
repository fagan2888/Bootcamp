// Create a student class with attributes: name, courses.
// Create a child class Programmer that extends Student.
// Programmer has attributes:
// os(operating system), languages, vcs(version control system),
//     and a method isProgramingIn that gets 1 parameter - language, that returns true if the programmer knows this
// language.
// Write a function that gets an array of Student instances(some of them students, some programmers) and returns the
// first programmer that knows javascript.

class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}
class Programmer extends Student {
    constructor(name, courses, languages, op, vcs) {
        super(name, courses);
        this.languages = languages;
        this.op = op;
        this.vcs = vcs;
    }
    isProgramingIn(language) {
        return this.languages.includes(language);
    }
}

function findStudentsJavaScriptProgrammer(students) {
    let programmer = null;
    students.forEach(student => {
        if (student instanceof Programmer && student.isProgramingIn('javascript')) {
            programmer = student;
            return;
        }
    });
    return programmer;

}
let students = [new Student('yakir', ['oop', 'history']),
new Programmer('tomer', ['math', 'priniple software language'], ['devops'], 'mac', 'git'),
new Programmer('nisim', ['hedva 1', 'physics'], ['python', 'c++', 'javascript'], 'windows', 'git')];


let javaScriptProgramer = findStudentsJavaScriptProgrammer(students);
console.log(javaScriptProgramer);