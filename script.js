function carregar () {
var msg = window.document.getElementById('msg')
var msg2 = window.document.getElementById('msg2')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var minutos = data.getMinutes()
var hora = 22
msg.innerHTML = `Agora são exatamente ${hora}:${minutos}.`

if ( hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'manha.jpg'
    document.body.style.background = 'rgb(255, 252, 77)'
} else if (hora >- 12 && hora < 18){
    //Boa Tarde
    img.src = 'tarde.jpg'
    document.body.style.background = 'rgb(249, 166, 42)'
} else {
    //boa noite
    img.src = 'noite.jpg'
    document.body.style.background = 'rgb(6, 6, 5)'
}
}

