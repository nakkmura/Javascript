let numField = document.querySelector('input#numfield');
let numList = document.getElementById('numlist');
let res = document.querySelector('div#result');
let numInternalList = [];

function adicionar() {
    let num = Number(numField.value);

    numField.value = '';
    numField.focus();

    if (num.length == 0) {
        window.alert('Campo Vazio!');
    } else if (num < 1 || num > 100) {
        window.alert('Insira um número válido');
    } else if (validar(num) == num) {
        window.alert('Este número já foi adicionado');
    } else {
        let item = document.createElement('option');
        numInternalList.push(num);
        item.text = `Número ${num} adicionado`;
        numList.appendChild(item);
        res.innerHTML = '';
    }
}

function calcular() {
    if (numInternalList.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `Ao todo, temos ${contarTodos(numInternalList)} números.<br>`;
        res.innerHTML += `O maior valor informado foi ${procMaior(numInternalList)}.<br>`;
        res.innerHTML += `O menor valor informado foi ${procMenor(numInternalList)}.<br>`;
        res.innerHTML += `Somando todos os valores, temos ${somarTodos(numInternalList)}.<br>`;
        res.innerHTML += `A média dos valores digitados é ${media(numInternalList)}.`
    }
}

function contarTodos(Array) {
    return Array.length;
}

function procMaior(Array) {
    let maxRange;
    Array.sort(function(a, b){return a-b});
    maxRange = Array.length - 1;
    return Array[maxRange];
}

function procMenor(Array) {
    Array.sort(function(a, b){return a-b});
    return Array[0];
}

function somarTodos(Array) {
    let total = 0;
    for(let i=0; i < Array.length; i++) {
        let n = 0;
        n = Array[i];
        total += n;
    }

    return total;
}

function media(Array) {
    let total = 0;
    let media = 0;
    for(let i=0; i < Array.length; i++) {
        let n = 0;
        n = Array[i];
        total += n;
    }
    
    media = total / Array.length;
    return media;
}

function validar(num) {
    let numSoma = 0
    for(let i=0;i<numInternalList.length;i++) {
        if (numInternalList[i] == num) {
            numSoma += num; // A soma é feita apenas caso o número do vetor seja igual ao número adicionado
        }
    }
    return numSoma
}