// array, object

let bazarList = ['eggs', 'milk', 'sugar'];

// bazarList.push(123);     // number not assignable to a string

let mixedArray: (string | number)[] = ['mango', 3, 'apple', 2, 'milk', 4, 'sugar']
// mixedArray.push(true);  // not assignable cause array accept string and number only

// ts => tuple

let coordinates: [number, number] = [30, 40];

let couple: [string, string] = ["husband", "wife"];

let nameRoll: [string, number] = ["Ahmed", 19]


// reference type: object


let user: {
    organization: "programming hero";   // value => type: literal types
    firstName: string;
    middleName ?: string;   // optional type "?"
    lastName: string;
    isMarried: boolean;

} = {
    organization : "programming hero",
    firstName: "Omar",
    lastName : "ahmed",
    isMarried: false
}


let userr: {
    readonly organization: string;   // access modifier, can't write ready only.
    firstName: string;
    middleName ?: string;   // optional type "?"
    lastName: string;
    isMarried: boolean;

} = {
    organization : "programming hero",
    firstName: "Omar",
    lastName : "ahmed",
    isMarried: false
}