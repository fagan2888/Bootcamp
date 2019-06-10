var school = {
    teachers : [
    {
        name:"Adi",
        subjects:['bible','math','history'],
        limitStudents: 12,
        currentStudents:[]
    },
    {
        name:"shraga",
        subjects:['sport','hebrew','literature'],
        limitStudents: 10,
        currentStudents:[]
    },
    {
        name:"david",
        subjects:['arabic'],
        limitStudents: 10,
        currentStudents:[]
    }   
],
students: [
    {
        name:"tomer",
        subject:"history"   
    },
    {
        name:"yakir",
        subject:"math"     
    },
    {
        name:"shimi",
        subject:"sport"     
    },
    {
        name:"yosof",
        subject:"arabic"    
    }
],
    
assignStudent : () => {
    school.students.forEach((student)=> { 
       school.teachers.forEach((teacher) => {
           if (teacher.limitStudents > teacher.currentStudents.length && 
            student.subject === teacher.subjects.filter((subject)=> subject === student.subject)[0]) 
            {
                teacher.currentStudents.push(student.name);
           }
       })
    });
}

}
console.log(school);
school.assignStudent();
console.log(school);