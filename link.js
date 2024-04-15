// Tạo một đối tượng XMLHttpRequest
var xhr = new XMLHttpRequest();

// Gửi yêu cầu GET để tải nội dung của login.html
xhr.open('GET', 'login.html', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Khi yêu cầu hoàn thành và nhận được nội dung
    var loginContent = xhr.responseText;

    // Tạo một phần tử div để chứa form đăng nhập
    var loginContainer = document.createElement('div');
    loginContainer.innerHTML = loginContent;

    // Tìm phần tử form Header
    var headerForm = document.getElementById('header-form');

    // Chèn form đăng nhập vào trước form Header
    headerForm.parentNode.insertBefore(loginContainer, headerForm);
  }
};
xhr.send();