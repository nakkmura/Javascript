function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        img.src = 'images/manha.png'
        document.body.style.background = '#edddbd'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        img.src = 'images/tarde.png'
        document.body.style.background = '#fe6a01'
    } else if (hora == 1) {
        msg.innerHTML = `Boa noite, agora é ${hora} hora.`
    } else {
        // BOA NOITE!
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        img.src = 'images/noite.png'
        document.body.style.background = '#423456'
    }
}