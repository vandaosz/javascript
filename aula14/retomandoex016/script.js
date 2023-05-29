function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = ('Impossível contar!')
    }
    else{
        res.innerHTML = 'Contando: '
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        
        }
        if(i < f){
        for(let c = i;c <= f;c += p)
        res.innerHTML += `${c} \u{1f449}`
        }
        else{
            for(let c = i;c >= f;c -= p)
            res.innerHTML = `${c} `
        }
        res.innerHTML += `\u{1f3c1}` 
    }

