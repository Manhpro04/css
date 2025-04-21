const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Biến để lưu trữ dữ liệu đăng ký tạm thời
let userData = null;

// Xử lý chuyển đổi giữa form Sign Up và Sign In
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Xử lý submit form Sign Up
const signUpForm = document.querySelector('.sign-up-container form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    // Lưu dữ liệu vào biến tạm thời
    userData = { name, email, password };
    console.log('User registered:', userData);

    // Thông báo đăng ký thành công và chuyển sang form Sign In
    setTimeout(() => {
        alert('Registration successful! Please sign in with your new account.');
        container.classList.remove('right-panel-active');
    }, 500);
});

// Xử lý submit form Sign In
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Lấy dữ liệu đã lưu
    const storedData = userData;

    if (storedData && storedData.email === email && storedData.password === password) {
        console.log('Sign In successful:', { email, password });
        // Thông báo đăng nhập thành công và chuyển hướng
        setTimeout(() => {
            alert('Login successful! Welcome, ' + storedData.name + '!');
            window.location.href = "Header.html";
        }, 500);
    } else {
        alert('Login failed: Incorrect email or password, or no user registered.');
        console.log('Sign In failed:', { email, password });
    }
});