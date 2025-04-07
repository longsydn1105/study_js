// AJAX
// Bài 1
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",  "https://dummyjson.com/products", true);
    xhr.onload = function() {
        if(xhr.status == 200) {
            var data = JSON.parse(xhr.responseText); // JSON thành js object
            var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
            tableBody.innerHTML = "";

            data.products.forEach(function(item,index) {
                var row = tableBody.insertRow();
                row.insertCell(0).textContent = index + 1;
                row.insertCell(1).textContent = item.title;
                row.insertCell(2).textContent = item.price;
                row.insertCell(3).textContent = item.description;
            });
        } else{
            console.log("Lỗi khi tải dữ liệu" + xhr.status);
        }
    };
    xhr.send();
};

// Chuyển đỔi sang JQUERY

//Câu 1: Sử dụng jQuery để thực hiện AJAX
function fecthDTAJAX() {
    $.ajax({
        url: "https://dummyjson.com/products",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var tableBody = $("#data-table tbody")[0];
            tableBody.innerHTML = ""; // Xóa nội dung cũ của tbody

            data.products.forEach(function(item) {
                // Code không có html
                var row =tableBody.insertRow();
                row.insertCell(0).textContent = item.id;
                row.insertCell(1).textContent = item.title;
                row.insertCell(2).textContent = item.price;
                row.insertCell(3).textContent = item.description;
            });
        },
        error: function(xhr, status, error) {
            console.log("Lỗi khi tải dữ liệu", status, error);
        }
    });
}

// Câu 2: Gọi list tagname
function fecthDTAJAX2() {
    $.ajax({
        url: "https://dummyjson.com/products",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
            tableBody.innerHTML = ""; // Xóa nội dung cũ của tbody

            data.products.forEach(function(item){
                var row = tableBody.insertRow();
                row.insertCell(0).textContent = item.id;
                row.insertCell(1).textContent = item.title;
                row.insertCell(2).textContent = item.description;
                row.insertCell(3).textContent = item.price;
                row.insertCell(4).textContent = item.tags;
            });
        },
    });
}

//Câu 3: 
function fecthDTAJAX3() {
    $.ajax({
        url: "https://dummyjson.com/products",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
            tableBody.innerHTML = "";

            data.products.forEach(function(item) {
                var link = document.createElement("a");
                link.href = "#";
                link.textContent = item.title;
                link.addEventListener("click", function() {
                    localStorage.setItem("productId", item.id); // Lưu id vào LocalStorage;
                    window.location.href = "product-detail.html";
                }); 

                var row = tableBody.insertRow();
                row.insertCell(0).textContent = item.id;
                row.insertCell(1).appendChild(link);
                row.insertCell(2).textContent = item.description;
                row.insertCell(3).textContent = item.price;
                row.insertCell(4).textContent = item.tags;
            });
        }
    });
}
$(document).ready(fecthDTAJAX3);