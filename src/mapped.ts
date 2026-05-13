// mapped

// Map

const arrayOfNum = [1, 6, 8, 5];


const arrayOfString = ['1', '6', '5']

const arrayOfStringUsingMap: string[] = (arrayOfNum.map((num) => num.toString()))

console.log(arrayOfStringUsingMap);


// mapped types

type Area<T> = {
    [key in keyof T]: T[key]
};

const area1: Area<{height: string, width: string}>  = {
    height: '50',
    width: '40'

}