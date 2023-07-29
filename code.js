//---------------------------------------------//


function xx1() {
    let text = document.getElementById('t1').value;
    let encryptionKey = document.getElementById('t2').value;
    const dataToEncrypt = text + encryptionKey;
    const encryptedData = btoa(dataToEncrypt);
    document.getElementById('t1').value = encryptedData;
    navigator.clipboard.writeText(encryptedData);
}

function xx2() {
    let text = document.getElementById('t1').value;
    let encryptionKey = document.getElementById('t2').value;
    const dataToDecrypt = atob(encryptedData);
    const decryptedText = dataToDecrypt.replace(encryptionKey, '');
    document.getElementById('t1').value = decryptedText;
    navigator.clipboard.writeText(decryptedText);
}

