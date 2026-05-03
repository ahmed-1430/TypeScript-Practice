// function 
// arrow function , normal function


// normal function
function add(num1: number, num2: number) {
    return num1 + num2
}

add(2, 2)

// arrow function 
const addnum = (num1: number, num2: number): number => num1 + num2;

addnum(5, 14);



// object => function => method

const poorUser = {
    name: "mezba",
    balance: 0,
    addbalance(value: number) {
        return this.balance + value;
    }

};

poorUser.addbalance(1000)

// function in array
const arr: number[] = [1, 4, 8];
const sqrarr = arr.map((elem: number): number => elem * elem);