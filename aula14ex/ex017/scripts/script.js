function gerarTab() {
    var numPrincipal = Number(document.querySelector('input#cnum').value);
    var tabuada = document.querySelector('div#tabuada');

    if (numPrincipal < 1) {
        window.alert('Por favor, digite um número válido!')
    } else {
        var res
        tabuada.innerHTML = `${numPrincipal} x 0 = 0 </br>`
        for (i=1;i<=10;i++) {
            res = numPrincipal * i
            tabuada.innerHTML += `${numPrincipal} x ${i} = ${res} </br>`
        }

        tabuada.style.background = '#000000'
        tabuada.style.color = '#ffffff'
        tabuada.style.borderRadius = '4px'
        tabuada.style.padding = '8px'
    }
}