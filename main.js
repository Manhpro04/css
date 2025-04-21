// Lấy các phần tử cần thiết
const cartButtons = document.querySelectorAll('.btn-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');
const modal = document.getElementById('myModal');
const cartBtn = document.getElementById('cart');
const closeModal = document.querySelector('.close');
const closeFooter = document.querySelector('.close-footer');
const orderBtn = document.querySelector('.order');
const productList = document.getElementById('product-list');
const paginationContainer = document.querySelector('.pagination');

// Mảng lưu trữ sản phẩm trong giỏ hàng
let cartItems = [];

// Phân trang
const productsPerPage = 4; // Số sản phẩm mỗi trang
let currentPage = 1;
const allProducts = Array.from(productList.getElementsByClassName('main-product'));

// Tính tổng số trang
const totalPages = Math.ceil(allProducts.length / productsPerPage);

// Hiển thị sản phẩm theo trang
function displayProducts(page) {
    currentPage = page;
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    // Ẩn tất cả sản phẩm
    allProducts.forEach((product, index) => {
        product.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    // Cập nhật nút phân trang
    updatePagination();
}

// Tạo nút phân trang
function updatePagination() {
    paginationContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            displayProducts(i);
        });
        paginationContainer.appendChild(button);
    }
}

// Hiển thị trang đầu tiên khi tải trang
displayProducts(1);

// Mở modal khi nhấn nút Cart
cartBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    updateCart();
});

// Đóng modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeFooter.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Đóng modal khi nhấn ra ngoài
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Xử lý nút Pay
orderBtn.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Order placed successfully!');
        cartItems = [];
        updateCart();
        modal.style.display = 'none';
    }
});

// Xử lý khi nhấn "Add to Basket"
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.main-product');
        const productImg = productElement.querySelector('.img-prd').src;
        const productName = productElement.querySelector('.content-product-h3').innerText;
        const productPrice = parseFloat(productElement.querySelector('.money').innerText.replace(/[^0-9.]/g, ''));

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingItem = cartItems.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                name: productName,
                price: productPrice,
                quantity: 1,
                img: productImg
            });
        }

        updateCart();
        // Hiển thị thông báo
        alert('Added to cart successfully!');
    });
});

// Cập nhật giỏ hàng
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        cartRow.innerHTML = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${item.img}" alt="${item.name}">
                <span class="cart-item-title">${item.name}</span>
            </div>
            <span class="cart-price cart-column">${formatPrice(item.price)}đ</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="${item.quantity}" min="1">
                <button class="btn btn-danger" type="button">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartRow);

        // Tính tổng tiền
        total += item.price * item.quantity;

        // Xử lý thay đổi số lượng
        const quantityInput = cartRow.querySelector('.cart-quantity-input');
        quantityInput.addEventListener('change', (e) => {
            const newQuantity = parseInt(e.target.value);
            if (newQuantity >= 1) {
                item.quantity = newQuantity;
                updateCart();
            } else {
                quantityInput.value = item.quantity;
            }
        });

        // Xử lý xóa sản phẩm
        const removeButton = cartRow.querySelector('.btn-danger');
        removeButton.addEventListener('click', () => {
            cartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
            updateCart();
        });
    });

    // Hiển thị tổng tiền
    totalPriceElement.innerHTML = `
        <strong class="cart-total-title">Total:</strong>
        <span class="cart-total-price">${formatPrice(total)}đ</span>
    `;
}

// Định dạng giá tiền (giữ nguyên định dạng đầy đủ)
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}