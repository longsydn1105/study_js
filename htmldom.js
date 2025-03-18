// HTML DOM: Document Object Model
/**
 * 1. Element: ID, Class, Tag, CSS Selector, HTML Collection
 * 2. Attribute
 * 3. Text
 */

// ------------------------------------

// API: Application Programming Interface

// JAVA SCRIPT: Browser || Server (NodeJS)

// Browser: HTML, CSS, JS, HTML DOM -> DOM -> WEB API
// Server: NodeJS, Express, MongoDB

//console.log(document);
//document.write('Hello');

// var headingNode = document.getElementById('heading'); 
// var headingsNode2 = document.getElementsByClassName('heading2');
//var headingsNode3 = document.getElementsByTagName('h2');

// console.log(headingsNode2);
// console.log(headingNode);
//console.log(headingsNode3);

//var headingNode = document.querySelector('.box .heading-2:last-of-type');
// Có thể dùng first-child hoặc last-child để lấy phần tử đầu tiên hoặc cuối cùng 
// hoặc nth-child(index) index là vị trí muốn lấy để lấy phần tử đầu tiên hoặc cuối cùng
//console.log(headingNode);

// var headingNodes = document.querySelectorAll('.box .heading-2');
// console.log(headingNodes[1]);

// console.log(document.forms['form-1']);
// console.log(document.forms[1]);

// var boxNode = document.querySelector('.box-1');
//Công việc 1: Sử dụng tới boxNode

// Công việc 2: Sử dụng các li elements bên trong .box-1

// console.log(boxNode.querySelectorAll('li'));

//---------------ÔN TẬP----------------------

//1. getElementById
//2. getElementsByClassName
//3. getElementsByTagName
//4. querySelector
//5. querySelectorAll

//6. HTML Collection

//7. document.write


// DOM attribute

// var headingElement = document.querySelector('h1');
// headingElement.title = 'Heading';
// headingElement.id = 'heading-1';

// headingElement.setAttribute('class','heading');
// console.log(headingElement.getAttribute('class'));
//console.log(headingElement);


//* innerText: Chỉ lấy ra text mà chúng ta nhìn thấy trên màn hình hiển thị
// ! textContent: Lấy ra tất cả text mà nằm trong thẻ đó
// todo: 
// var headingElement = document.querySelector('h1');
// headingElement.innerHTML = 'New Heading';
// headingElement.outerHTML = '<h6>New Heading 123</h6>';
// console.log(headingElement.innerHTML);

// * InnnerHTML and OuterHTML

// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1 title="heading">Heading</h1>';
// console.log(boxElement.innerHTML);

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var ulElement = document.querySelector('ul');

//     ulElement.innerHTML = courses.map(course => 
//         `<li>${course}</li>`
//     ).join('');
//     return ulElement;
// }

//  render(courses)