// instance of type guard / type narrowing 

class Person {
    name: string

    constructor(name: string) {
        this.name = name;
    }
    getSleep(sleepOfHours: number) {
        console.log(`${this.name} sleep daily ${sleepOfHours}`);
    }
}

class Student extends Person {

    constructor(name: string) {
        super(name);
    }

    doStudy(hourOfStudy: number) {
        console.log(`${this.name} daily study ${hourOfStudy} hours`);
    }
}

class Teacher extends Person {

    constructor(name: string) {
        super(name)
    }
    takeClass(numOfHours: number) {
        console.log(`${this.name} take class daily ${numOfHours} hours`);
    }
};

const getUserInfo = (user: Person) => {
    if (user instanceof Student) {
        user.doStudy(10);
    } else if (user instanceof Teacher) {
        user.takeClass(5);
    } else {
        user.getSleep(8);
    }
}

// function guard
const isStudent = (user: Person) => {
    return user instanceof Student;
};
const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfoWithFunction = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(6);
    } else if (isTeacher(user)) {
        user.takeClass(3);
    } else {
        user.getSleep(12);
    }
}

const student1 = new Student('student');       // instance of Student Class.

const techer1 = new Teacher('teacher');

const person1 = new Person('person')

getUserInfo(person1)


