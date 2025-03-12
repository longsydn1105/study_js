// Scopes in function 
// var User = {
//     username: 'Long Handsome',
//     password: 123,

//     getUserName: function() {
//         return this.username;
//     },

//     setUserName: function(username) {
//         this.username = username;
//     },

//     getPassWord: function() {
//         return this.password;
//     },

//     setPassword: function(password) {
//         this.password = password;
//     }
// }

// var avar = 'global';
// afunct();
// function afunct() {
//     var avar1 = 'local';
//     console.log(avar);
// }

// // console.log(avar1); // avar1 is not defined 
// User.setUserName('Long Code Trâu');
// console.log(User.getUserName());


// var person1 = {name: 'Hưng', age: 20};
// var person2 = {name: 'Long', age: 21};

// var sayHello = function() {console.log('Hello ' + this.name)};
// var sayGooble = function() {console.log('Gooble ' + this.name)};

// sayHello.call(person1);
// sayGooble.apply(person2);

// Scopes chain
// function step1() {
//     console.log(te);
// }

// function step2() {
//     var te = 'Hello';
//     step1();
// }
// var te = 'Hi';
// step2(); // Hi

//Bind()
// var studentName = {studentName:`Long Handsome`}
// var studenThis = {
//     studentName: `Long Code Trâu`,
//     printName: function() {
//         console.log(this.studentName);
//     }
// };

// var printStudentName = studenThis.printName.bind(studentName);
// printStudentName(); // Long Handsome

// Currying
// function addCurries(a) {
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         }
//     }
// }

// console.log(addCurries(1)(2)(3)); // 6

// var addBycurries = (a) => (b) => (c) => a+b+c;

// Hàm lồng nhau
// var makeCounter = () => { 
//     var count = 0;
//     return () => {
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = makeCounter();
// counter1();
// counter1();
// counter1();

// var registrations = {
//     classes: "Databases",
//     students: [
//       { studentId: "001", name: "Mai ha Thi" },
//       { studentId: "002", name: "Nguyen Van A" },
//       { studentId: "003", name: "Mai An Thuy" }
//     ],
    
    // clickEnrollment: function () {
    //   var userThis = this;
    //   this.students.forEach(function (student) {
    //     console.log(student.name + " already enrolled class " + userThis.classes);
    //   });
    // }
    //Thay thế bằng arrow function
    // clickEnrollment: function () {
    //   this.students.forEach((student) => {
    //     console.log(student.name + " already enrolled class " + this.classes);
    //   });
    // }

    // Sử dụng bind()
    // clickEnrollment: function () {
    //   this.students.forEach(function (student) {
    //     console.log(student.name + " already enrolled class " + this.classes);
    //   }.bind(this));
    // }

//  };
// registrations.clickEnrollment();  

// function createStudent(name, age) {
//   return {
//     name,
//     age,
//     sayHi: function(){
//       console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
//     }
//   }
// }

// function createStudentInClass(name, age, classes, grade) {
//   let student = createStudent(name, age);
//   student.classes = classes;
//   student.grade = grade;
//   student.registrate = function() {
//     console.log(`${this.name} is registed in ${this.classes} class`);
//   };

//   student.getGrade = function() {
//     console.log(`${this.name} get grade ${this.grade}`);
//   };

//   return student;
// }

// const stu = createStudentInClass('Long', 21, 'ReactJS', 10);
// stu.sayHi();
// stu.registrate();
// stu.getGrade();

// LÀM BÀI TẬP NÂNG CAO

// Tạo một đối tượng animal với tham số
// Animal (loai, taoAmThanh()) => Mamal(loai, coLong, moTa()) => Human (ten, tuoi, gioiThieu())
// Loai: string
// coLong: boolean
// ten: String, tuoi: number
// animal => mamal => human || Human = Mamal('Human', false) || Dog = Mamal('Dog', true);

// function Animal(loai) {
//   return {
//     loai,
//     taoAmThanh: function(tiengGoi) {
//       console.log(tiengGoi);
//     },
//   };
// }

// function Mamal(loai, coLong) {
//   var mamal = Animal(loai);
//   mamal.coLong = coLong;
//   mamal.moTa = function() {
//     console.log(`Đây là một loài ${this.loai} và ${this.coLong ? 'có' : 'không có'} lông`);
//   };
//   return mamal;
// }

// function Human(ten, tuoi) {
//   var human = Mamal('Human', false);
//   human.ten = ten;
//   human.tuoi = tuoi;
//   human.gioiThieu = function() {
//     console.log(`Xin chào, tôi tên là ${this.ten} và tôi ${this.tuoi} tuổi`);
//   };
//   return human;
// }
// var dog = Mamal('Dog', true);
// dog.taoAmThanh('Gâu gâu');
// dog.moTa();

// var human = Human('Long', 21);
// human.taoAmThanh('Hello');
// human.moTa();
// human.gioiThieu();