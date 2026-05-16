// polymorphism

class Person {
    getSleep() {
        console.log(`I sleep for 8 hours--Normal person`);
    }
};

class Student extends Person {
    getSleep() {
        console.log(`I sleep for 10 Hours-- student`);
    }
};

class NextLevelDeveloper extends Person {
    getSleep(): void {
        console.log(`I am a next level developer i sleep for 6 hours`);
    }
};

const getSleepingHours = (param: Person) => {
    param.getSleep()
}


const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)


// another example of polymorphism

class Shape {
    getArea(): number {
        return 0;
    }
};

class Circle extends Shape {
    radious: number

    constructor(radious: number) {
        super()
        this.radious = radious
    }
    // area = pi*r*r
    getArea(): number {
        return Math.PI * this.radious * this.radious
    }
}

class Rectangle extends Shape {
    height: number;
    width: number
    constructor(height: number, width: number) {
        super()
        this.height = height;
        this.width = width
    }
    // area  = height * width
    getArea(): number {
        return this.height * this.width
    }
};

const getArea = (param: Shape) => {
    console.log(param.getArea());
}


const shape1 = new Shape();
const shape2 = new Circle(50);
const shape3 = new Rectangle(15, 15)

getArea(shape3)