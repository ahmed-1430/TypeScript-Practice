// type assertion 

const kgToGram = (input: number | string): number | string | undefined => {
    if (typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(" ")
        return `converted output ${Number(value) * 1000}`
    }
}

const result1 = kgToGram(1) as number;
console.log({ result1 });

const result2 = kgToGram('2') as string;
console.log({ result2 });


// example for try catch =>
type customError = {
    message: string
}
try {

} catch (err) {
    console.log((err as customError).message);
}