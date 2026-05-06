// Interface types

type User = {
    name: string,
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserInfo = User & Role;

const user1: UserInfo = {
    name: 'Ahmed',
    age: 20,
    role: 'admin'

}

const user2: User = {
    name: 'Omar',
    age: 22
}

// example of interface operator
// Interface => Object Type => array, object, function

interface Iuser {
    name: string,
    age: number,
}

interface userWithRole extends Iuser {
    role: 'admin' | 'user'
}

const user4: Iuser = {
    name: 'xyz',
    age: 12
}

const user3: userWithRole = {
    name: 'Ahmed',
    age: 20,
    role: 'admin'
}

// interface in function 

type Add = (num1: number, num2: number) => number;


const add: Add = (num1, num2) => num1 + num2;



interface Iadd {
    (num1: number, num2: number): number
}
const iAdd : Iadd = (num1, num2) => num1 + num2;