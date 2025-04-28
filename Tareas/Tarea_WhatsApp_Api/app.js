var linkApi = '';

function enviar(){
    const numTel = document.getElementById('numTel').value.trim();
    const sms = encodeURIComponent(document.getElementById('mensaje').value.trim());
        if(numTel ===   ''|| sms === ''){
            alert("Rellena los campos, plox c:");
        }else{
            linkApi = `https://wa.me/${numTel}?text=${sms}`;
            open(linkApi);
        }
}

//De aquí para abajo fue un extra que hice por curiosidad XD

function generar(){
    const numTel = document.getElementById('numTel').value.trim();
    const sms = encodeURIComponent(document.getElementById('mensaje').value.trim());
    if(numTel ===   ''|| sms === ''){
        alert("Rellena los campos, plox c:");
    }else{
        linkApi = `https://wa.me/${numTel}?text=${sms}`;
        let qr = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + linkApi;
        let qrImg = document.createElement('img');
        qrImg.src=qr;
        qrImg.alt='Código Qr';
        qrImg.classList.add('qr_code');

        let copyButton = document.createElement('button')
        copyButton.innerText = 'Copy';
        copyButton.setAttribute('data-link', linkApi)
        copyButton.setAttribute('onclick', 'copiar(this)')
        copyButton.classList.add('btn')


        const qrDiv= document.getElementById('qr_code');
        qrDiv.innerHTML = '';

        qrDiv.appendChild(qrImg);
        qrDiv.appendChild(document.createElement('br'));
        qrDiv.appendChild(copyButton);
        
    }
}

function copiar(boton){
    let link = boton.getAttribute('data-link');
    navigator.clipboard.writeText(link);
    alert("Link copiado!")
}