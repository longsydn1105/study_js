//---------------------------------------------- MỘT SỐ HÀM BUILT-IN-------------------------------------------------
/**
 * Một số hàm built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval 
 */
// var fullName ='Phùng Sỹ Long';
// console.log(fullName)
// console.warn(fullName)
// console.error(fullName) Hàm console chỉ hiển thị trên console

//confirm('Xác Nhận bạn 18+') Thông báo hỏi bạn đã đủ 18 tuổi

//prompt('Bạn bao nhiêu tuổi?') // Thông báo nhưng có ô input để nhập

// setTimeout(function() {
//     alert('3s đã trôi qua')
// }, 3000) // Cho một đoạn code được chạy sau 1 khoảng thời gian
// var i = 0
// setInterval(function() {
//     i++
//     console.log('Anh Long Đại Ca ' + i )
// }, 1000) // Thực thi liên tục sau 1 khoảng thời gian

// ----------------------------------- TOÁN TỬ ----------------------------------------

/**
 * Toán tử số học
 * + -> Cộng
 * - -> Trừ 
 * * -> Nhân
 * ** -> Luỹ thừa
 * / -> Chia
 * % -> Chia lấy số dư 
 * ++ -> Tăng giá trị 1 số
 * -- -> Giảm giá trị 1 số
 */
//  NỐI CHUỖI
// var firstName = 'Phùng'
// var lastname  = 'Long'

// console.log(firstName + lastname)

// Toán tử so sánh

/**
 * Kiểu dữ liệu trong Javascript
 * 1. Kiểu dữ liệu nguyên thuỷ:
 *  - Number
 *  - String
 *  - Boolean
 *  - Undefined
 *  - Null
 *  - Symbol
 * 
 * 2. Các kiểu dữ liệu phức tạp.
 *  - Function
 *  - Object
 */

// Number type 
// var a = 1;

// // console.log(typeof a) Cách để kiểm tra kiểu dữ liệu
// // String type
// var fullName = 'Phùng Sỹ Long';

// // Boolean type
// var isSuccess = true;

// // Undefined type - Là khai báo biến nhưng không gán giá trị
// var age;

// // Null type
// var isNull = null; // Nghĩa là không có gì

// // Symbol
// var id = Symbol('id'); // Gắn đặc tính độc nhất

// // Function 
// var myFunction = function() {
//     alert('Hi, xin chào các bạn')
// }
// // console.log(typeof myFunction)
// // Object type
// var myObject = {
//     name: 'Long Phùng',
//     age: '20',
//     address: 'Đà Nẵng',
//     myFunction: function() {

//     },
// };

// //console.log('myObject', myObject);

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ];

// //console.log(myArray)

//-------------------------- TOÁN TỬ SO SÁNH -------------------------
/**
 *  ===
 * !==
 * Đây là phép so sánh tuyệt đối, cần cùng kiểu dữ liệu
 */
// var a = 1;
// var b = '1';

// console.log(a !== b);

//---------------------------CÂU LỆNH ĐIỀU KIỆN VÀ CÁC PHÉP SO SÁNH -----------------------

// var a = 3;
// var b = 2;

// if (a > b) {
//     console.log('A lớn hơn B')
// }else {
//     console.log('A nhỏ hơn B')
// }

// ------------------------------HÀM----------------------------------
// Quy tắc đặt tên hàm
// không đặt số ở ký tự đầu tiên
//
// function showDialog(message) {
//     alert(message);
// }
// showDialog('Tí Long thương Su heo lắm')

// Sử dụng arguments
// function  writeLog() {
//     var myString = '';
//     for (var param of arguments) {
//          myString += `${param} - `;
//     }
//     console.log(myString);
// }
// writeLog('Tí đẹp trai', 'Tí code giỏi')

// Return trong hàm
// var isConfirm = confirm("Are you sure?");
//
// console.log(isConfirm);

// Các loại function
// 1. Declaration function
// 2. Expresstion function
// 3. Arrow function

// function showMessage() {
//
// }
//
// var showMessage2 = function () {
//
// }
//
// setTimeout( function() {
//
// })

// ------------------- CHUỖI ---------------------------
// var fullName = 'Long Phùng là \'siêu nhân \'';
//
// // 1 số case sử dụng backslash
// console.log(fullName.length);
// var checkBackslash = 'Đây là dấu \\';
// console.log(checkBackslash.length);
// // chú ý độ dài khi viết code không nên dài quá 80 ký tự
//
// // Template String ES6
// var firstName = 'Phùng';
// var lastName = 'Long';
// console.log(`Tôi là ${lastName} ${firstName}`);

// ------- LÀM VIỆC VỚI CHUỖI -------
// var myString = 'Tôi tên là Phung Sỹ Long, Tôi đẹp trai, Tôi code giỏi, Tôi giàu có';
//
// // 1. Length
// console.log(myString.length);
//
// // 2. find index
// console.log(myString.indexOf('Long'));
//
// // 3. Cut String
// console.log(myString.slice(-5,-1));
//
// // 4. Replace
// console.log(myString.replace(/Tôi/g, 'Mình'));
//
// // 5,6. Convert to upper/lower case
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
//
// // 7. Trim - dùng để xoá ký tu khoảng trắng thừa
// console.log(myString.trim());
//
// // 8. Split - Cắt chuỗi thành array
// var languages =  'Python';
// console.log(languages.split(''));
//
// // 9. Get character by index
// const myString2 = 'Long Phung';
// console.log(myString2.charAt(0));

// ------------------------- NUMBER -----------------------
// To fixed dùng để làm tròn số thập phân
// var PI = 3.1405889895489;
// console.log(PI.toFixed(2));

// ------------------------ MẢNG ------------------------
/*
    Làm việc với mảng
    1. To String
    2. To Join
    3. Pop
    4. Push
    5. Shift
    6. Unshift
    7. Splicing
    8. concat
    9. Slicing
* */
//
// var languages = [
//     'JavaScript',
//     'Java',
//     'Python',
// ];
// //1. To String
// console.log(languages.toString());
//
// //2. Join
// console.log(languages.join(', '));
//
// //3. pop - Xoá đi phần tử cuoi mảng và trả lại phần tu đã xoa
// console.log(languages.pop());
// console.log(languages);
//
// //4. push - thêm phần tử vào cuối mảng
// console.log(languages.push('Dark'));
// console.log(languages);
//
// // 5. Shift - Xoá đi 1 pt ở đầu mảng và trả về pt đó
// console.log(languages.shift());
// console.log(languages);
//
// // 6. Unshift -  thêm 1 pt ở đầu mảng
// console.log( languages.unshift('C++'));
// console.log(languages);
//
// // 7. splicing - xoá 1 pt bất kỳ trong mảng
// languages.splice(1,0);
// languages.splice(1,0, 'JavaScript');
// console.log(languages);
//
// // 8. concat - nối 2 array
// var language2 = ['Dark', 'Ruby'];
// console.log(languages.concat(language2));
//
// // 9.Slicing - cắt vài pt của mảng
// console.log(languages.slice(-2,-1));

// ----------------------- OBJECT --------------------

// var emailKey = 'email';
// var myInfor = {
//     /*
//     * Cách gọi: function  --> Phương thức
//     *           orther --> Thuoc tinh
//     * */
//     name: 'Long Phùng',
//     age: 20,
//     address: 'Đà Nẵng city',
//     [emailKey]: 'longdaica@gmail.com',
//     getName : function() {
//         return this.name;
//     }
// };
// // Cách thêm thuộc tính mới
// //myInfor.email = 'longsydn1105@gmail.com';
//
// //Cách xoá 1 thuộc tính
// delete myInfor.age
// console.log(myInfor.getName());
//


// Object constructer

// function User(fullName, age, from) {
//     this.fullName = fullName;
//     this.age = age;
//     this.from = from;
// }
//
// var author = new User('Long Phùng', 20, 'VN');
// User.prototype.nickName = 'Long Đại Ca';
// User.prototype.getNickName = function () {return this.nickName;}
// author.comment = 'Đẹp Trai';
// console.log(author.nickName);
// console.log(author.getNickName());

/*
*   Object prototype - Basic
*
* */

// -------------- ĐỐI TƯỢNG DATE -----------------
// var date = new Date(); // nếu chỉ gọi Date() và không dùng new thì sẽ trả về String
// console.log(typeof date.getFullYear());
// console.log(date.getMonth() + 1); // 0 - 11
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());

// ----------------- ĐỐI TƯỢNG MATH ------------------
// console.log(Math.PI);
// console.log(Math.round(1.49)); // làm tròn
// console.log(Math.abs(-4)); // lấy trị tuyệt đối
// console.log(Math.ceil(4.1)); // làm tròn trên
// console.log(Math.floor(4.1)); // làm tròn dưới
// console.log(Math.random()); // tạo số ngẫu nhiên
// console.log(Math.min(-100, 100, 50));
// console.log(Math.max(-100, 100, 50));

// ---------------- CÂU LỆNH IF ELSE ------------------
// var date = new Date().getDay() + 1;
// if(date === 5) {console.log('T5')}

// ---------------------- SWITCH CASE ------------
// var date = 3;
//
// switch(date) {
//     case 2:
//         console.log('T2');
//         break;
//     case 3:
//         console.log('T3');
//         break;
//     case 4:
//         console.log('T4');
//         break;
//     case 5:
//         console.log('T5');
//         break;
//     case 6:
//         console.log('T6');
//         break;
//     case 7:
//         console.log('T7');
//         break;
//     case 8:
//         console.log('CN');
//         break;
//     default:
//         console.log('Ko biết');
// }

// -------------------- TOÁN TỬ 3 NGÔI ---------------------------------
// Dùng cho những trường hợp đơn giản, khỏi dùng if else
// var course = {
//     name : 'JavaScript',
//     coin: 250,
// }
//
// var result = course.coin > 250 ? `${course.coin}` : 'Miễn phí';
// console.log(result);

// -------------------- VÒNG LẶP -------------------------------
// For loop
// Có thể dùng break(Dừng vòng lặp lại) va continue( Tiếp tục và bỏ qua vòng lặp với key hiện tại)
// for (i = 0; i < 100; i++) {
//     console.log(i+1);
// }

// -------------- MỘT CHUT VỀ ĐỆ QUY ----------------------
// function  deQuy() {
//     if(num < 0) {
//         // Điều kiện dừng
//         return;
//     }
//     deQuy();
// }

// -------------- MẢNG PHẦN 2 -------------------------
// var courses = [
//     {
//         id: 1,
//         name: 'JAVASCRIPT',
//         price: 100,
//     },
//     {
//         id: 2,
//         name: 'JAVA',
//         price: 200,
//     },
//     {
//         id: 3,
//         name: 'PYTHON',
//         price: 150,
//     },
//     {
//         id: 4,
//         name: 'C++',
//         price: 0,
//     },
//     {
//         id: 5,
//         name: 'C++',
//         price: 0,
//     },
//     {
//         id: 6,
//         name: 'PYTHON',
//         price: 150,
//     },
// ]

// // In ra từng phần tử của mảng
// courses.forEach(function(course, index) {
//     console.log(index, course)
// })
//
// // Trả về kiểu boolean, kiểm tra tất cả các pt
// var isFree = courses.every(function(course, index) {
//     return course.price === 0;
// })
// console.log(isFree);
//
// // Some, kiểm tra 1 vài pt và chỉ cần 1 pt đúng điều kiện thì sẽ ngừng vòng lặp
// var isFree2 = courses.some(function(course, index) {
//     return course.price === 0;
// })
// console.log(isFree2);
//
// // find(), dùng để tìm kiếm
// var course = courses.find(function(course, index) {
//     return course.name === 'PYTHON';
// })
// console.log(course);
//
// // filter, tìm gống find nhưng sẽ lấy tất cả pt thoã mãn
// var listcourse = courses.filter(function(course, index) {
//     return course.name === 'PYTHON';
// })
// console.log(listcourse);
// console.log(courses.filter(courses.id !=== 1); cách viết sai
// console.log(courses.filter(course => course.id !== 1));

// Map, dùng để thay đổi nội dung trong array
// var newCourse = courses.map(function (course) {
//     return {
//         id: course.id,
//         name: `Tên khoá học: ${course.name}`,
//         price: `Giá khoá học: $${course.price}`,
//     };
// })
// console.log(newCourse)
//
// var i = 0
//
// // reduce(),
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     return accumulator + currentValue.price;
// }
// var totalCoin = courses.reduce(coinHandler, 0);
// console.log(totalCoin);
//
// var numbers = [50,100,150, 180, 200, 220];
//
// var total = numbers.reduce(function(total, number) {
//     return total + number;
// });
// console.log(total);

// FLAT - "Làm phẳng" mảng từ Depth Array - Mảng Sâu
// var depthArray = [1,2, [3,4] , 5, 6, [7,8,9]];
//
// var flatArray = depthArray.reduce(function (flatArray, depthArray) {
//     return flatArray.concat(depthArray);
// }, []);
// console.log(flatArray);

// var topics = [
//     {
//         topic: 'Font-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'HTML, CSS'
//             },
//             {
//                id: 2,
//                title: 'JavaScript'
//             }
//         ]
//     },
//
//     {
//         topic: 'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 title: 'NodeJS'
//             },
//
//             {
//                 id: 2,
//                 title: 'Java'
//             }
//         ]
//     }
// ]
//
// var newCourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// }, []);
//
// console.log(newCourses);
//
// var html = newCourses.map(function(course) {
//     return `
//         <div>
//             <h2>Tên Khoá học ${course.title} </h2>
//             <p>ID khoá học: ${course.id}</p>
//         </div>
//     `;
// });
//
// var html2 = html.join('');
// console.log(html2);

// include method, Thêm method cho một kiểu dữ liệu nào đó
// var courses = ['Javascript', 'Java', 'Python','C++'];
//
// console.log(courses.includes('Java'));