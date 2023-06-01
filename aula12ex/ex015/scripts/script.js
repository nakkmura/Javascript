function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    

    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual || Number(anoNasc.value) < 1900){
        window.alert('[ERRO]~Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=12) {
                // Criança
                img.setAttribute('src', 'images/crianca-homem.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'images/jovem-homem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'images/adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=12) {
                // Criança
                img.setAttribute('src', 'images/crianca-mulher.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'images/jovem-mulher.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'images/adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}