// type guard



// in typeof
type alphaNum = number | string;

const add = (num1: alphaNum, num2: alphaNum) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString()
    }
}
const result1 = add(1, 1)
console.log(result1);


// in guard

type normalUser = {
    name: string    
};

type adminUser = {
    name: string, 
    role: "Admin"
}
const userInfo = (user: normalUser | adminUser) => {
    if("role" in user){
        console.log(`This is ${user.name} and his role is ${user.role}`);
    }else{
        console.log(`This is ${user.name}`);
    }
}

const getUserInfo = userInfo({name: 'Ahmed', role: "Admin"});