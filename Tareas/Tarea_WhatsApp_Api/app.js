function generar(value){
    let numTel = document.getElementById('numTel').value.trim();
    let sms = encodeURIComponent(document.getElementById('mensaje').value.trim());
    var linkApi = `https://wa.me/${numTel}?text=${sms}`;
    if(numTel ===   ''&& sms === ''){
        alert("Rellena los campos, plox c:");
    }else{
        let qr = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + linkApi;
        let qrImg = document.createElement('img');
        qrImg.src=qr;
        qrImg.alt='Código Qr';
        qrImg.classList.add('qr_code');
        const qrDiv= document.getElementById('qr_code');
        qrDiv.innerHTML = '';
        qrDiv.appendChild(qrImg);
        // qrDiv.innerHTML = `
        // <button>Copy</button>
        // `;
        
    }
    console.log(linkApi);
}