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
// class square {
//     constructor(width) {
//         this.with = width;
//     }
    
//     getArea() {
//         return this.with * this.with;
//     }  
// };

// class cube extends square {
//     constructor(width) {
//         super(width);
//     }
//     squareArea = this.getArea();
//     getVolume() {
//         return `This Volume ${this.squareArea * this.with}`;
//     }
// }

// class Animal {
//     constructor(type) {
//         this.type = type;
//     }

//     makeSound() {
//         console.log(`This ${this.type} is making sound`);
//     }
// }

// class Mamal extends Animal {
//     constructor(type, hasFur) {
//         super(type);
//         this.hasFur = hasFur;
//     }

//     description() {
//         return `This ${this.type} is ${this.hasFur ? 'has' : 'has not'} fur`;
//     }
// }

// class Human extends Mamal {
//     constructor(name, age) {
//         super('Human', false);
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         return `I am ${this.name} and I am ${this.age} years old `;
//     }
// }

// class Titan extends Human {
//     constructor(typeTian, power, age) {
//         super('Titan', age);
//         this.typeTian = typeTian;
//         this.power = power;
//     }

//     bienHinh() {
//         return `Titan ${this.typeTian} biến hình có sức mạnh ${this.power}`;
//     }
// }

// const human = new Human('Long', 21);
// console.log(human.introduce());
// console.log(human.description());
// const titanThuyTo = new Titan('Thuỷ Tổ', '100000 power', 20);
// console.log(titanThuyTo.bienHinh());


// --------------------------- CALLBACK-------------------------
// Viết hàm nhận biết hàm lẻ hoặc chẵn bằng lamda function (Tạo ra hàm với 1 dòng code)
// Viết 1 hàm greeting truyền vào name
// Viết thêm 1 hàm goobye hiển thị say goodbye

// var chanLe = (num) => num%2 === 0 ? true : false;
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function greeting(name, callback) {
//     console.log(`Hello ${name}`);
//     callback();
// }

// function goodbye() {
//     console.log(`Goodbye`);
// }

// function myFunction(arr, cb) {
//     for(var i = 0; i < arr.length; i++) {
//         if(cb(arr[i])) {
//             console.log(`${arr[i]} là số chẵn`);
//         }else {
//             console.log(`${arr[i]} là số lẻ`);
//         }
//     }
// }

// Array.prototype.forEach2 = function (callback) {
//     for(var index in this ) {
//         if(this.hasOwnProperty(index)) {
//             if(callback(this[index])) {
//                 console.log(`${this[index]} là số chẵn`);
//             }else {
//                 console.log(`${this[index]} là số lẻ`);
//             }
//         }
//     }
// }

// myFunction(arr, chanLe);
// //arr.forEach2(chanLe);
// greeting('Long', goodbye);

