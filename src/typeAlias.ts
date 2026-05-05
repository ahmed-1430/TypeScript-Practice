
type user = {
    id: number,
    name: {
        firstName: string,
        lastName: string,
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}


const user1: user = {
    id: 123,
    name: {
        firstName: 'Mr.',
        lastName: 'Ahmed'
    },
    gender: 'male',
    contactNo: '+8801712345678',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }

}

const user2: user = {
    id: 124,
    name: {
        firstName: 'Mr.',
        lastName: 'xyz'
    },
    gender: 'male',
    contactNo: '+8801712345678',
    address: {
        division: 'Dhaka',
        city: 'Dhanmondi'
    }

}



// type Alias in  function

type AddFunc = (num1 : number, num2 : number) => number;

const add : AddFunc = (num1, num2) => num1 + num2; 