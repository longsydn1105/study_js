/*
1. Là Hàm
2. Truyền qua đối số
3. Được gọi lại trong hàm nhận đối số
* */

// function myFunction(x){
//     if(typeof x === "function") {
//         x(123);
//     }
// }

// function myCallBack(value) {
//     console.log(value);
// }

// myFunction(myCallBack);

// Array.prototype.map2 = function(callback) {
//     var output = [],arrayLength = this.length;
//     for(var i =0; i < arrayLength; i++) {
//         var reusult  = callback(this[i], i);
//         output.push(reusult);
//     }

//     return output;
// }

// var course = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var htmls = course.map2(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

// var course = new Array(10);
// course.push('Javascript');
// console.log(course);
// console.log(course.length);

// forEach, find, filter, some, every, reduce, map, sort, includes

//forEach
// var courses = [ 
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// Array.prototype.forEach2 = function(callback) {
//     for(var index in this) {
//         if( this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }
// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);  
// })

// filter
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];
// Array.prototype.filter2 = function(callback) {
//     var output = [];

//         for(var index in this) {
//             if(this.hasOwnProperty(index)) {
//                 var result = callback(this[index], index, this);
//                 if(result) {
//                     output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }
// var testCourses = courses.filter2(function(course, index, array) {
//     //console.log(course,index, array);
//     return course.coin > 700;
// });
// console.log(testCourses);

// Some
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: false,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: false,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false,
//     }
// ];

// Array.prototype.some2 = function(callback) {
//     var result = false;
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this)) {
//                 result = true;
//             }
//         }
//     }
//     return result;
// }
// var result = courses.some2(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result);

//Every
// var courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true,
//     }
// ];

// Array.prototype.every2 = function(callback) {
//     var result = true;
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(!callback(this[index], index, this)) {
//                 result = false;
//                 break;
//             }
//         }
//     }
//     return result;
// }

// var result = courses.every2(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result);