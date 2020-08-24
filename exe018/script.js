let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ //indica que o valor nao esta na lista
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        //para adicionar no select
        let item = document.createElement('option') //cria uma tag option
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //adiciona item no select
        res.innerHTML = ''

    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus() //faz o prompt piscar
}

function finalizar(){
    if(valores.length == 0){
        alert('Insira valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        //let media = 0
        for(let i in valores){
            soma += valores[i]
            if(valores[i] > maior)
                maior = valores[i]
            if(valores[i] < menor)
                menor = valores[i]
        }
        let media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor = ${maior}</p>`
        res.innerHTML += `<p>O menor valor = ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores = ${soma}</p>`
        res.innerHTML += `<p>A media dos valores = ${media}</p>`
    }
}