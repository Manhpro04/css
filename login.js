
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// Lấy phần tử HTML của form đăng ký
const signUpForm = document.querySelector('.sign-up-container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    
    // Ẩn form đăng ký và hiển thị form đăng nhập
    signUpForm.style.display = 'none';
});

signInButton.addEventListener('click', () => {
    // Đăng nhập và chuyển đến trang khác
    window.location.href = "Header.html";
});