let showPass = document.getElementById('show-pass');
let passwordInput = document.getElementById('password');

function passGenerate() {
    let length = 8,
        charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
        retVal = "";

    for (let i = 0; i < length; ++i) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    showPass.textContent = retVal;
    passwordInput.value = retVal;
    console.log(retVal);
}

function togglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.getElementById('generate-btn').addEventListener('click', passGenerate);
