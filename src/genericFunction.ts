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

const result5 = createArrayTuppleWithGeneric('Ahmed', {id: 123, name: 'Ahmed'})