// dynamically generalize

type genericArray<T> = Array<T>;



// const friends : string[] = ['x', 'y', 'z'];
const friends: genericArray<string> = ['x', 'y', 'z'];

// const rollNumbers : number[] = [1, 2, 3];
const rollNumbers: Array<number> = [1, 2, 3];

// const isEligible : boolean[] = [true, false, true];
const isEligible: Array<boolean> = [true, false, true];


// example of generic types
type coordinates<x, y> = [x, y];

const coordinate1: coordinates<number, number> = [11, 12]

const coordinate2: coordinates<string, string> = ['11', '12']

// example of generic in object

const users: genericArray<{ name: string, age: number }> = [
    {
        name: 'Allen',
        age: 22
    },
    {
        name: 'Ahmed',
        age: 20
    }
]