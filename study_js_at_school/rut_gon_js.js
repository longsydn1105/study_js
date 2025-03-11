/**
 * Toán tử 3 ngôi 
 * Rút gọn cấu trúc if else
 */
// var x = 100;
// var  result = (x<1000) ? "Nhỏ hơn 1000" : "Lớn hơn 1000";
// console.log(result);

/**
 * Shorthand Evaluated 
 * Cách gán giá trị nhanh nếu có nhiều trường hợp giá trị - thường dùng để tránh việc giá trị được gán là null or undefine
 */

// var x2, x1 = 100;
// if(x1 !== null || x1 !== undefined || x1  !== '' ) {
//     x2 = x1;
// }else {
//     x2 = '200';
// }
// console.log(x2);

// Rút gọn
// var x1 = 100;
// var x2 = x1 || '';

/**
 * Variable declaration – If Comparison 
 * Khai báo biến nhanh và so sánh 
 */
// var x;
// var y;
// var z = 5;
// // Rút gọn
// var x,y,z = 5;

// var isTurnOn = true;
// if(isTurnOn == true) {}
// //Rút gọn
// if(isTurnOn) {}

/**
 * For loop – For loop with decimal base
 * Cách rút gọn các điều kiện trong vòng lặp for
 */

// listGame = ['valorant', 'htmlol', 'csgo']
// for(var i = 0; i < listGame.length; i++) {}
// //Rút gọn
// for(var item in listGame) {}

// for(var i = 0; i < 100000; i++) {}
// //Rút gọn
// for(var i = 0; i < 1e5; i++) {}
// 1e0 == 1;
// 1e1 == 10;
// 1e2 == 100;
// 1e3 == 1000;
// 1e4 == 10000;
// 1e5 == 100000;
// 1e6 = 1000000;
// // Bao nhiêu e thì bấy nhiêu số 0;


/**
 * Object property 
 * Có thể gán property cho obj dễ dàng hơn. Nếu key trùng luôn với tên biến 
 */

// var x =1, y =2;
// var obj = {x:x, y:y};
// console.log(obj.x);
// //Rút gọn
// var x =1, y =2;
// var obj = {x,y}
// console.log(obj.y)

/**
 * Rút gọn định nghĩa function 
 * Sử dụng arrow function
 * tenHam = (thamso1, thamso2,...) => {
 *      thao tác cần làm
 *      return ...;
 *      };
 * nếu thao tác cần làm ít thì không cần dùng {}, và nếu return 1 dòng đơn giản thì có thể bỏ return
 */
// var list = ['js', 'java','Python', 'C++']
// function sayHello(name) {
//     console.log('Hello', name);
// }
// sayHello('Tí code trâu')

// setTimeout(function() {
//     console.log('Loaded')
// }, 2000);

// list.forEach(function(item){
//     console.log(item);
// });

// RÚT GỌN 
// sayHello = name => console.log('Hello', name);
// sayHello('Long Code Trâu')

// setTimeout(() => console.log("Loader"), 2000);

// list.forEach(item => console.log(item));

// // Cách rút gọn return bằng arrow function
// // function getValue(ratio) {return ratio * 6.9};
// getValue = ratio => ratio *6.9;

//Set default value for parameter in function
// function getValue(a,b,c) {
//     if(a == undefined) { a = 3;};
//     if(b == undefined) {b = 4;};
//     return a*b+c;
// }
// Rút gọn
// getValue = (a, b = 3, c = 4) => a*b+c;


/**
 * Template list
 */
// var firstName = 'Phùng',lastName = 'Long';
// console.log('Tôi tên là : ' + lastName + ' ' + firstName);
// // Rút gọn
// console.log(`Tôi tên là : ${lastName} ${firstName}`);

// var lorem = 'Đây là một \n\t'
// + 'Đoạn văn khá dài';
// console.log(lorem);
// var lorem2 = `Đây là một 
//     đoạn văn khá dài`;
// console.log(lorem2)


/*
    Destructuring Assignment
*/
// import thêm thư viện
// var action = require('lib/action');
// var service  = require('lib/service');

// // Thêm thuộc tính 
// var form = this.props.form;
// var error = this.props.error;
// var entity = this.props.entity;
// var controller = this.props.controller;
// var component = this.props.component;

// // Rút gọn
// import { action, service } from 'lib';
// var { form, error, entity, controller, component } = this.props;

/**
   Spead Operator
   Các thao tác với mảng
 */

// //join 2 mảng
// var odd = [1,3,5];
// var nums = [2,4,6].concat(odd);

// // Nhập (clone) mảng
// var arr = [1,2,3];
// var arr2 = arr.slice();

// Rút gọn

// Join 2 mảng 
// var odd = [1,3,5];
// var nums = [2,4,6, ...odd];

// // clone 2 mảng 
// var arr = [1,2,3];
// var arr2 = [...arr];

// var arr3 = [3,6,7, ...arr, 9,0];

/**
 * Constraint Param
 * Giới hạn tham số truyền vào hàm
 */

// function sample(param1) {
//     if(param1 == undefined){
//         throw new Error('Thiếu tham số');
//     }
//     return param1;
// }

// // Rút gọn

// mandatory =() => {throw new Error('Thiếu tham số');} // hàm này luôn trả về lỗi
// samole = (param1 = mandatory()) => param1; // truyền vào tham số param 1 và nếu tham số param1 không có giá trị thì sẽ gọi hàm mandatory

/**
 * Find() in array
 */

// var employees = [
//     {name: 'Long', age: 20},
//     {name: 'Huy', age: 21},
//     {name: 'Tí', age: 22}
// ];

// function findEmp(name){
//     for(var i = 0; i < employees.length; i++ ) {
//         if(employees[i].name === name) {
//             return employees[i];
//         }
//     }
// }

// var name = 'Long';
// emp = findEmp(name);

// // Rút gọn
// var name1 = 'Tí';
// emp1 = employees.find(item => item.name === name1);
// // Phươn thức find() trả về phần tử đầu tiên trong thấy trong mảng
// // filter() thì trả về 1 mảng gồm các phần tử thoã mãn điều kiện

/**
 * Object[key]
 * Để get property của object trong JS ngoài cách Obj.prop, còn có thể viết Obj['prop']. Nhìn qua thì dùng cả 2 cách đều cho kết quả 
 * như nhau. Tuy nhiên để viết được những đoạn code có thể tái sử dụng, thì cần sử dụng cách thứ 2 
 */

// function validate(fullName) {
//     if(!fullName.firstName || !fullName.lastName ) { // Kiểm tra xem có tồn tại firstName và lastName không
//         return false;
//     }else {
//         return true;
//     }
// }
// console.log(validate({firstName: 'Phùng', lastName: 'Long'}));

// Cách 2: cách này có thể tái sử dụng code được hơn

// var rule = {
//     firstName :{
//         required: true,
//     },
//     lastName : {
//         required: true,
//     }
// }

// var validate = (rule, values) => {
//     for(prop in rule) {
//         if(rule[prop].required) {
//             if(!values[prop]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// console.log(validate(rule, {firstName: 'Long', lastName: 'Phùng'}));
// console.log(validate(rule, {firstName: 'Hải'}));

/*
    Bitwise NOT double 
    Toán tử ~~ là một cách rút gọn của Math.floor() trong JS, để lấy phần nguyên của một số thập phân
*/
Math.floor(3.9) === 3; //true
console.log(~~3.9);
// Rút gọn
~~3.9 === 3; // true