function calcular(){
    var v0 = window.document.getElementById('num0')
    var v1 = window.document.getElementById('num1')
    var res = window.document.getElementById('res')
    var num0 = Number(v0.value)
    var num1 = Number(v1.value)
    var soma = num0 + num1
    res.innerHTML = (`A soma entre ${num0} e ${num1} é igual a ${soma}`)
}
