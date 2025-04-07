//var productId = localStorage.getItem("productId"); // đây là kiểu string
// console.log(productId); // Kiểm tra id đã lưu vào LocalStorage hay chưa

function fecthProductDetail() {
    let productID = localStorage.getItem("productId");
    console.log(productID);
    if(!productID) {
        const msg = document.createElement("p");
        msg.textContent = "Không có sản phẩm nào đưỢc chọn";
        document.body.appendChild(msg);
        return;
    }

    fetch("https://dummyjson.com/products/"  + productID)
        .then(response => response.json())
        .then(product => {
            const title = document.createElement("h1");
            title.textContent = product.title;

            const description = document.createElement("p");
            description.innerHTML = `<strong>Mô tả: </strong> ${product.description}`;

            const price = document.createElement("p");
            price.innerHTML = `<strong>Giá: </strong> ${product.price}`;

            const category = document.createElement("p");
            category.innerHTML = `<strong>Danh mục: </strong> ${product.category}`;

            const tags = document.createElement("p");
            tags.innerHTML = `<strong>Tags: </strong> ${product.tags.join(", ")}`;

            const image = document.createElement("img");
            image.src = product.thumbnail;
            image.alt = product.title;
            image.width = 300;

            const comment = document.createElement("p");
            comment.innerHTML = `<strong>Đánh giá: </strong> ${product.rating}`;

            const review = document.createElement("p");
            review.innerHTML = `<strong>Đánh giá: </strong> ${product.reviews}`;

            const reviewSection = document.createElement("div");
            reviewSection.innerHTML = "<h3>Đánh giá người dùng</h3>";
        
            if (product.reviews && product.reviews.length > 0) {
                product.reviews.forEach(review => {
                    const item = document.createElement("div");
                    item.style.marginBottom = "16px";
                    item.innerHTML = `
                        <p><strong>${review.reviewerName}</strong> – ⭐ ${review.rating}</p>
                        <p>${review.comment}</p>
                        <hr>
                    `;
                    reviewSection.appendChild(item);
                });
            } else {
                reviewSection.innerHTML += "<p>Chưa có đánh giá nào.</p>";
            }
        
            //Thêm tất cả vào body
            document.body.appendChild(title);
            document.body.appendChild(description);
            document.body.appendChild(price);
            document.body.appendChild(category);
            document.body.appendChild(tags);
            document.body.appendChild(image);
            document.body.appendChild(comment);
            document.body.appendChild(reviewSection);

            
        })
        .catch(error => {
            const errMsg = document.createElement("p");
            errMsg.textContent = "Lỗi khi tải dữ liệu sản phẩm" + error.message;
            document.body.appendChild(errMsg);
            console.error(error);
        });
}

function fechtProductReview(productID) {
    fetch(`https://dummyjson.com/products/${productID}/reviews`)
        .then(response => response.json())
        .then(data => {
            const reviews = data.reviews;
            const container = document.createElement("div");
            container.innerHTML = `<h3>Đánh giá sản phẩm</h3>`;

            if(reviews.length === 0) {
                container.innerHTML += `<p>Không có đánh giá nào cho sản phẩm này.</p>`;
            } else {
                reviews.forEach(review => {
                    const item = document.createElement("div");
                    item.style.marginBottom = "10px";

                    item.innerHTML = `
                        <p> <strong>${review.user}</strong> - ⭐${review.rating} </p> <br>
                        <p>${review.body} </p>
                        <hr>
                    `;
                    container.appendChild(item);
                });
            }
            // Thêm container vào body
            document.body.appendChild(container);
        })
        .catch(error => {
            console.error("Lỗi khi tải dữ liệu đánh giá sản phẩm:", error);
        });
}
window.onload = fecthProductDetail;