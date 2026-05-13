// oop -> Class -> Object

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     makeSound(){
//         console.log(`${this.name} is making sound ${this.sound}`);
//     }
// }

// parameter Properties
class Animal {
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    }
}

const dog = new Animal('doggy', 'dog', 'ghew ghew')

console.log(dog.name);

const cat = new Animal('cat bhai', 'cat', 'mew mew')
console.log(cat.name);

cat.makeSound()