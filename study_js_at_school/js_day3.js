// --------------------------OBJECT ---------------------------------------
/**
 * Trong 1 obj thì có thể để property và method, trong property có thể là 1 obj khác
 */
// var students = {
//     name: 'Phùng Sỹ Long',
//     properties: {
//         age: 21,
//         height: '177cm',
//     },
    
//     checkMature: function(age) {
//         return (age >18) ? true : false;
//     },

//     getName: function() {
//         console.log(this.name);
//         return this.name;
//     },
// };

// console.log(students.properties.age);
// console.log((students.checkMature(students.properties.age)) ? 'Người trưởng thành' : 'Trẻ em');

// var test = (a,b) => a+b;
// function test1(a,b) {return a+b};
// console.log(test(1,2));
 
// var plus = (a,b) => a+b;

// console.log(plus(1,2));
// console.log(plus.name);
// console.log(typeof plus);

// var plus1 = (a,b) => {
//     if(!a) throw('a is undefined');
//     b = b || 0;
//     return a+b;
// };
// try {
//     console.log(plus1());
// } catch (error){
//     console.log(error);
// }
// console.log(plus1(1));


// function plusAll() {
//     var sum = 0;
//     for(var  i in arguments) {
//         sum += arguments[i];
//     };
//     return sum;
// }
// console.log(plusAll(1,2,3,4,5));

// function func1(a,b,c) {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[3]);
// }
// func1(1,2,3,4)

// Câu 1:
// function getNumMaxandMin(array) {
//     var max = array[0], min = array[0];
//     for(var i = 0; i < array.length; i++) {
//         max = (max < array[i]) ? array[i] : max;
//         min = (min > array[i]) ? array[i] : min;
//     }
//     return [max, min];
// }

// console.log(getNumMaxandMin([2,4,5,6,7,8,9,10,11,12,25,14,15,20,1,17,18,19]));

// // Câu 1a
// var isEven = (a) => (a%2 == 0) ? true :false;
// console.log(isEven(2));
// console.log(isEven(15));

// Câu 1b
// var getNum = (array, x) => {
//     if(isEven(x)) {
//         for(var i in array) {
//             (i%2==0) ? console.log(i) : '';
//         }
//     }else {
//         for(var i in array) {
//             (i%2!=0) ? console.log(i) : '';
//         }
//     }
// }

// var getNumAdv = (array, x) => {
//     array.forEach((value, i) => {
//         if(i%2 === (isEven(x) ? 0 : 1)) {
//             console.log(value);
//         }
//     });
// }

// getNumAdv([1,2,3,4,5,6,7,8,9], 2);

// Câu 2
// function findTextAllowNum(str, x) {
//     var arr = str.split(' ');
//     arr.map(word => (word.length == x) ? console.log(word) : '');
// }

// function findTextAllowNum2(str, x) {
//     var word = '';
//     for(var i = 0; i < str.length; i++) {
//         if(str[i] != ' ') {
//             word += str[i];
//         }else {
//             (word.length == x) ? console.log(word) : '';
//             word = '';
//         }
//     }
//     (word.length == x) ? console.log(word) : ''; // đề phòng khi chuỗi kết thúc không có dấu space
// }
// var string = 'Anh Long đẹp trai';
// findTextAllowNum2(string, 4);

// Câu 3
// var daoNguoc = (str) => {
//     var arr = '';
//     for(var i = str.length-1; i >=0; i--) {
//         arr += str[i]
//     };
//     console.log(arr);
// }

// var daoNguoc2 = (str) => {
//     var arr = str.split('');
//     console.log(arr.reverse().join('')); // join() mặc định dùng dấu phẩy để nối
// }
// daoNguoc2('Phùng Sỹ Long');

// Câu 4
// var xaoTron = (str) => {
//     var mid = Math.ceil(str.length/2);
//     var newStr = '';

//     for(var i = mid; i < str.length; i++ ) {
//         newStr += str[i];
//     }

//     for(var i = 0; i < mid; i++ ) {
//         newStr += str[i];
//     }

//     console.log(newStr);
// }

// var xaoTron2 = (str) => {
//     var mid  = Math.ceil(str.length/2);
//     var newStr = str.slice(mid) + str.slice(0, mid);
//     console.log(newStr);
// }

// xaoTron2('abcd');
// xaoTron2('abcde');