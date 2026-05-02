// JS - TS
// String, Number, Boolean, Undefined, null
// TS=> never, unknown, void

//example
let userName:string = "Ahmed123";
// userName = 123;   //Not assignable because of userName declared type as a String
userName = "Ahmed" ;

let userId : number = 123;
// userId = "123";    // not assignable cause userId defined type as a number
userId= 456;

// userName.toFixed();    // showing error cause of toFix not exist for a string
userId.toFixed();

let isAdmin = false;
// isAdmin = 542   // isAdmin is a boolean that's why number is not assignable
isAdmin = true;