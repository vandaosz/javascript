function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    if(inicio.value.length = 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[error]Os campos estão vazios ou são igual a zero!')
    }
}