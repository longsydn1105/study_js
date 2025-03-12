// Constructors and "New" 
// function Animal(type) {
//     this.type = type;
// }
// Animal.prototype.makeSound = function() {
//     console.log(`This ${this.type} is making sound`);
// }

// function Mamal(type, hasFur) { 
//     Animal.call(this, type);
//     this.hasFur = hasFur;
// }

// Mamal.prototype = Object.create(Animal.prototype); // Kế thừa lại các prototype của animal
// Mamal.prototype.constructor = Mamal; // Gán lại con trỏ 

// Mamal.prototype.description = function() {
//     return `This ${this.type} is ${this.hasFur ? 'has' : 'has not'} fur`;
// }

// function Human(name, age) {
//     Mamal.call(this, 'Human', false);
//     this.name = name;
//     this.age = age;
// }

// Human.prototype = Object.create(Mamal.prototype);
// Human.prototype.constructor = Human;

// Human.prototype.introduce = function() { 
//     return `I am ${this.name} and I am ${this.age} years old `;
// }

// const human = new Human('Long', 21);
// console.log(human.introduce());
// console.log(human.description());

// ------------------- CLASS---------------------------
class square {
    constructor(width) {
        this.with = width;
    }

    
}