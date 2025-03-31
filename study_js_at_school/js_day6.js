// lấy nút button
var button = document.querySelector('button');
var body = document.querySelector('body');
var input = document.querySelector('input');
var form = document.querySelector('form');
var mouseHover = document.querySelector('#mouseHover');
var clickMe = document.querySelector('#click');
var timeout = null;
var colorArray = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'white', 'gray'];

// Tạo sự kiện lắng nghe khi click vào button
button.addEventListener('click', function() {
    //
    var randomColor = rand255();
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
});

// Sự kiện alert khi ngưng gõ
input.addEventListener("keyup", function(){
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        alert(input.value);
    }, 1000);
});

// Sự kiện khi submit form
form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    console.log('Bắt sự kiện form');
    document.querySelector("#us").value = "Long";
    document.querySelector("#pass").value = "12345";

});

// Bài 1
mouseHover.addEventListener("mouseover",function(){
    body.style.backgroundColor = colorArray[3];
});

mouseHover.addEventListener("mouseout", function() {
    body.style.backgroundColor = colorArray[0];
});
function rand255() {
    return colorArray[Math.floor(Math.random() *10)];
}

//Bài 2
clickMe.addEventListener("click", function()  {
    var us = document.querySelector('#us').value;
    var pass = document.querySelector('#pass').value;
    alert("Username: " + us + "\nPassword: " + pass);
});

