// ? => ternary Operator => Decision Making
// ?? => nullish coalescing Operator => null / undefined
// ?. => optional chaining 


// ternary operator " ? "
const ageOfMarriege = (age: number) => {
    if (age >= 21) {
        console.log('you are eligibla');
    }
    else {
        console.log('you are not eligible');
    }

    const result = age >= 21 ? 'You are eligible to marry' : 'you are not eligible to marry'
    console.log(result);
}

ageOfMarriege(22);


// nullish coalescing operator

const userTheme = undefined;

const selectedTheme = userTheme ?? "DarkTheme";
console.log(selectedTheme);



// optional chaining 

const user: {
    address: {
        division: string,
        city: string
        postalCode?: string
    }
} = {
    address: {
        division: 'Dhaka',
        city: "Dhaka",
    }
}

const postcode = user?.address?.postalCode;