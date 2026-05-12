// constraint: strict rules


type studentInfo = {
    id: number,
    name: string
}

const addStudentToCourse = <T extends studentInfo>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    };
}

const student1 = {
    id: 426,
    name: "xyz",
    isPen: true
};

const student2 = {
    id: 845,
    name: 'abc',
    isMarried: false
}

// const student3 = {
//     isWatch: true
// }

const result1 = addStudentToCourse(student1);
console.log({ result1 });

const result2 = addStudentToCourse(student2);
console.log({ result2 });


// const result3 = addStudentToCourse(student3);
// console.log({ result3 });