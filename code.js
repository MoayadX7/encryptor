const CryptoJS = require('crypto-js');

function xx1() {
    let text = document.getElementById('t1').value;
    let password = document.getElementById('t2').value;
    let encrypted = CryptoJS.AES.encrypt(text, password).toString();
    encrypted = btoa(encrypted);
    document.getElementById('t1').value = encrypted;
    navigator.clipboard.writeText(encrypted);
}

function xx2() {
    let encryptedBase64 = document.getElementById('t1').value;
    let password = document.getElementById('t2').value;
    let encrypted = atob(encryptedBase64);
    const decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);
    document.getElementById('t1').value = decrypted;
    navigator.clipboard.writeText(decrypted);
}

