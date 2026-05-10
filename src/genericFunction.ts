// generic function 

const createArrayWithString = (value: string) => [value];


const createArrayWithNumber = (value: number) => [value];

const createArrayWithObj = (value: { id: number, name: string }) => [value];


const arrString = createArrayWithString('Ahmed');
const arrNumber = createArrayWithNumber(17);
const arrObj = createArrayWithObj(
    {
        id: 123, name: 'Ahmed'
    }
);

// Now example of Generic Function


const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}

const arrStringWithGeneric = createArrayWithGeneric('Ahmed');
const arrNumberWithGeneric = createArrayWithGeneric(17);
const arrObjWithGeneric = createArrayWithGeneric(
    {
        id: 123, name: 'Ahmed'
    }
);


// tuple

const createArrayWithTuple = (param1: string, param2: string) => {
    return [param1, param2];
}

const createArrayTuppleWithGeneric = <X, Y>(param1: X, param2: Y) => {
    return [param1, param2];
}


const result4 = createArrayTuppleWithGeneric('ahmed', true)

const result5 = createArrayTuppleWithGeneric('Ahmed', { id: 123, name: 'Ahmed' })


// add course for student function 

const addStudentToCourse = <T>(studentInfo: T) => {
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

const result1 = addStudentToCourse(student1);
console.log({result1});

const result2 = addStudentToCourse(student2);
console.log({result2});