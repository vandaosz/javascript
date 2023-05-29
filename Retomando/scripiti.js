let v0 = window.document.getElementById('num0')
let v1 = window.document.getElementById('num1')
let res = window.document.getElementById('res')

 if(v0.value.length == 0 || v1.value.length == 0){
        res.innerHTML = (`Dados vázios ou com zeros!`)}
        
    function somar(){
        let n0 = Number(v0.value)
        let n1 = Number(v1.value)
        let soma = n0 + n1
        res.innerHTML = (`O resultado da soma entre ${n0} e ${n1} é igual a ${soma}`)
    }
    function subtrair(){
        let n0 = Number(v0.value)
        let n1 = Number(v1.value)
        let sub = n0 - n1
        res.innerHTML = (`O resultado da subtração entre ${n0} e ${n1} é igual a ${sub}`)
    }
    function dividir(){
        let n0 = Number(v0.value)
        let n1 = Number(v1.value)
        let div = n0 / n1
        res.innerHTML = (`O resultado da divisão entre ${n0} e ${n1} é igual a ${div}`)
    }
    function multiplicar(){
        let n0 = Number(v0.value)
        let n1 = Number(v1.value)
        let multi = n0 * n1
        res.innerHTML = (`O resultado da multiplicação entre ${n0} e ${n1} é igual a ${multi}`)
}

