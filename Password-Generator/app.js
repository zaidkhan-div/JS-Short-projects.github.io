// let showPass = document.getElementById('show-pass')
// function passGenerate() {
//     let length = 8,
//         charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
//         retVal = "";
//     for (i = 0, n = charSet.length; i < length; ++i) {
//         retVal += charSet.charAt(Math.floor(Math.random()) * n)
//     }
//     showPass.textContent = retVal
//     return retVal
// }
// console.log(passGenerate());

let showPass = document.getElementById('show-pass');

function passGenerate() {
    let length = 8,
        charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        retVal = "";

    for (let i = 0; i < length; ++i) {
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length)); 
    }

    showPass.textContent = retVal; // Show password on the webpage
    return retVal;
}

// console.log(retVal);
