// Mock product data
var products = [
    {
        title: "iPhone X",
        description: "The iPhone X is a revolutionary device with a bezel-less display and Face ID recognition.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1_.png"
    },
    {
        title: "iPhone 11",
        description: "The iPhone 11 features a dual-camera system and offers powerful performance with the A13 Bionic chip.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png"
    },
    {
        title: "iPhone 12",
        description: "The iPhone 12 introduces 5G support and comes with an advanced dual-camera system.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13_2_.png"
    }
];

// Display product information
var productContainer = document.querySelector('.product-list');
products.forEach(function(product) {
    var productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <div class="title">${product.title}</div>
        <div class="description">${product.description}</div>
        <div class="image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <a href="#" class="btn">Learn More</a>
    `;
    productContainer.appendChild(productElement);
});