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
function fecthDTAJAX() {
    $.ajax({
        url: "https://dummyjson.com/products",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var tableBody = $("#data-table tbody")[0];
            console.log(tableBody);
            tableBody.innerHTML = ""; // Xóa nội dung cũ của tbody

            data.products.forEach(function(item) {
                // Code không có html
                var row =tableBody.insertRow();
                console.log(item.title);
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

$(document).ready(fecthDTAJAX);