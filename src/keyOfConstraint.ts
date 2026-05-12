// keyof : type operator 

type richPeopleVehivle = {
    car: string,        // key: value
    bike: string,
    cng: string
}

type myVehicle1 = "car" | "bike" | "cng";
// use of typeof
type myVehicle2 = keyof richPeopleVehivle;

const myVehicle1: myVehicle1 = "car"
const myVehicle2: myVehicle2 = "car"





type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}
const user: User = {
    id: 478,
    name: "Ahmed",
    address: {
        city: "Dhaka"
    }
};

const product = {
    brand: "ASUS",
    Model: "vivobook"
}

const student = {
    id: 946,
    name: "xyz"
}
const getPropertyFromObj = <Z>(obj: Z, key: keyof Z) => {
    return obj[key]
};

const result5 = getPropertyFromObj(user, "name");
console.log(result5);

const result6 = getPropertyFromObj(student, "name");
console.log(result6);

const result7 = getPropertyFromObj(product, "brand");
console.log(result7);