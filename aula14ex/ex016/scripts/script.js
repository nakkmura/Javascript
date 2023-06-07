function contar() {
    var numInicio = Number(document.querySelector('input#cinicio').value);
    var numFim = Number(document.querySelector('input#cfim').value);
    var passo = Number(document.querySelector('input#cpasso').value);
    var res = document.querySelector('div#res')

    if (numFim < 1) {
        res.innerHTML = 'Impossível contar!'
    } else if (passo === 0 || passo < 1) {
        window.alert('Passo inválido! Considerando PASSO 1')
        res.innerHTML = `Contando: </br>`
        for (numInicio;numInicio<=numFim;numInicio++) {
            res.innerHTML += `${numInicio}`
            if (numInicio < numFim) {
                res.innerHTML += `, `;
            }
        }
    } else {
        res.innerHTML = `Contando: </br>`
        for (numInicio;numInicio<=numFim;numInicio+=passo) {
            res.innerHTML += `${numInicio}`
            if (numInicio + passo <= numFim) {
                res.innerHTML += `, `
            }
        }
    }
}