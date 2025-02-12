// Product Data
const products = [
    { id: 1, name: "Laptop", price: 599.99, image: "images/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 299.99, image: "images/phone.jpg" },
    { id: 3, name: "Headphones", price: 49.99, image: "images/headphone.jpg" },
    { id: 4, name: "Smart Watch", price: 199.99, image: "images/watch.jpg" }
];

let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
document.getElementById("cart-count").textContent = cartCount;

// Display Products
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        let productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(productElement);
    });
}

// Add to Cart
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    localStorage.setItem("cartCount", cartCount);
    alert("Product added to cart!");
}

// Load Products on Page Load
document.addEventListener("DOMContentLoaded", loadProducts);
