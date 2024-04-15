// Mock product data
var products = [
    {
        title: "iPhone X",
        description: "The iPhone X is a revolutionary device with a bezel-less display and Face ID recognition.",
        image: "https://ibuyonline.vn/wp-content/uploads/2022/03/ipx-cu-gia-re-1.jpg"
    },
    {
        title: "iPhone 11",
        description: "The iPhone 11 features a dual-camera system and offers powerful performance with the A13 Bionic chip.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEa1i31qZVgieMXNqQKLBq6xfuZdbZda-SajsCIBOamg&s"
    },
    {
        title: "iPhone 12",
        description: "The iPhone 12 introduces 5G support and comes with an advanced dual-camera system.",
        image: "https://cdn-v2.didongviet.vn/files/media/catalog/product/i/p/iphone-13-pink-didongviet.jpg"
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