//inheritance
class Parent {
    name: string;
    age: number;
    address: string

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} ghonta ghumay`);
    }
}


class student extends Parent { };

const student1 = new student('Ahmed', 18, 'dhaka')

student1.getSleep(12)


class Teacher extends Parent {
    designation: string;    // extra property

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)

        this.designation = designation;
    }
    takeClass(numOfClass: number) {
        console.log(`${this.name} ${numOfClass} ghonta class nen`);
    }
};

const teacher = new Teacher('Ahmed', 26, 'dhaka', 'teacher')
teacher.takeClass(4)