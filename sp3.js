var products = [
    
    {
        title: "Infinix Hot 40 Pro Free Fire 8GB 256GB",
        description: "Helio G99 - a name not too strange in the technology world as this is a cheap phone chip but with good performance within its price range..",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-infinix-hot-40-pro.png"
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