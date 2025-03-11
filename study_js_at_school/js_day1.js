
// let array = ['hello', 123, true, [], {}, function() {}]

// for(let i = 0; i < array.length; i ++) {
//     console.log(typeof array[i])
// }

// let x = 2;

// console.log(x *=2)

//---- Multidimentsionl Arrays --- Slide 35
// var a = [[1,2,3], [1,3,4],[1,2,3,4,5]];

// for(var i = 0; i < a.length; i++) {
//     for(var j = 0; j < a[i].length; j++) {
//         document.write(a[i][j]+ " ");
//     }
//     document.write("<br/>");
// }

// ------------------ Slide 39 
// var x = 5, y = 0;
// if(x !== y) {
//     y=x;
// }else {
//     y = 4;
// }
// console.log(y);

// -------------------- Silde 41 - 45: Loops
// var x = 0;
// while( x <5) {
//     x++;
//     console.log(x);
// }

// var x = 0;
// do{
//     console.log(x);
//     x++;
// }while(x<5);

// for(var i = 0, j = 100; i<100, j>50; i++, j --) {
//     document.write(i+ " "+ j+ "<br/>") ;
// 

// var foobar = ['foo', 'bar', 'something']
// for(var x in foobar) {
//     console.log(foobar[x]);
// }

// outerloop: for(var i = 0; i<100; i++) {
//     innerloop: for(var j = 0; j < 100; j++) {
//         console.log("i: "+ i + " Và j: " + j);
//         if(j>2) break; // nếu j > 2  thì dừng vòng lặp hiện tại
//         if(j>5) continue outerloop;  // Nếu j > 5 thì dừng vòng lặp inner và chạy tiếp vòng lặp outer
//         // trường hợp nếu có code dưới này và chỉ dùng continue thì sẽ bỏ qua code dưới này và chạy tiếp vòng lặp inner
//     }
// }

// CÂU 3: SWITCH CASE + NỐI CHUỖI
// function universityName(name) {
//     dhdn = 'ĐHĐN';
//     result = '';
//     switch(name) {
//         case 'SP': result = `ĐH${name} - ${dhdn}`; break;
//         case 'BK': result = `ĐH${name} - ${dhdn}`; break;
//         case 'VKU': result = `ĐH${name} - ${dhdn}`; break;
//         case 'NN': result = `ĐH${name} - ${dhdn}`; break;
//         case 'SPKT': result = `ĐH${name} - ${dhdn}`; break;
//         default: result = `${dhdn}`;
//     }
//     return `Trường bạn chọn là: ${result}`;
// }

// console.log(universityName('SP'));
// console.log(universityName('BK'));
// console.log(universityName(''));
// console.log(universityName('VKU'));

// CÂU 2: dùng regular expression để kiểm tra 
// const prompt = require("prompt-sync")({ sigint: true });


// function validateInput(username, password) {
//     var usernameRegex = /@email\./;
//     var passwordRegex =  /^(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

//     if(!usernameRegex.test(username)) {
//         console.log('Email không hợp lệ');
//         return false;
//     }
//     if(!passwordRegex.test(password)) {
//         console.log('Mật khẩu phải có ít nhất 8 ký tự, 1 ký tự số và 1 ký tự đặc biệt');
//         return false;
//     }

//     console.log('Đăng nhập hợp lệ');
//     return true;
// }

// var username = prompt('Nhập email: ');
// var password = prompt('Nhập mật khẩu: ');
// validateInput(username, password);

// CÂU 6: Code về Exception
function doSomeThing() {
    var y = 8, x = true;
    for(i = 0; i <10; i++) {
        x = Math.random() > 0.5;
        try {
            y = (x) ? y+1 : y-1;
            if(y <= 5) {
                throw new Error("Y đã bé hơn bằng 5");
            };
        }catch (error) {
            console.log("ê rốt, lỗi rồi: " + error.message);
            break;
        } finally {
            console.log("Y = " + y);
        };
    }

}
doSomeThing();