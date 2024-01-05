function ValidateLoginForm() {
    let x
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginEmail.trim() === '' || loginPassword.trim() === '') {
        alert('Vui lòng điền đầy đủ email và mật khẩu.');
        return false;
    }

    alert('Dang nhap thanh cong.');
    return true;
}

function validateRegisterForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('pwd').value;
    const rePwd = document.getElementById('rePwd').value;

    if (fullName.trim() === '' || email.trim() === '' || pwd.trim() === '' || rePwd.trim() === '') {
        alert('Vui lòng điền đầy đủ thông tin.');
        return false;
    }

    if (pwd !== rePwd) {
        alert('Mật khẩu và mật khẩu xác nhận không khớp.');
        return false;
    }

    alert('Dang ky thanh cong.');
    return true;
}