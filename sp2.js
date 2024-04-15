// Mock product data
var products = [
    {
        title: "Samsung Galaxy S21",
        description: "The Samsung Galaxy S21 is a high-end smartphone with a powerful Exynos processor and a stunning AMOLED display.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png"
    },
    {
        title: "Samsung Galaxy Note 20",
        description: "The Samsung Galaxy Note 20 features a large display, an S Pen stylus, and a versatile camera system.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-flip-5-256gb_1_5.png"
    },
    {
        title: "Samsung Galaxy A52",
        description: "The Samsung Galaxy A52 offers a great balance of performance and affordability, with a high-quality display and a long-lasting battery.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/s/ss-s24-ultra-xam-222.png"
    },
    {
        title: "Samsung Galaxy A52",
        description: "The Samsung Galaxy A52 offers a great balance of performance and affordability, with a high-quality display and a long-lasting battery.",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-a556_galaxy_a55_awesome_lilac_ui.png"
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