function contar(){
    ini = window.document.getElementById('inicio')
    fi = window.document.getElementById('fim')
    pa = window.document.getElementById('passo')
    res = window.document.getElementById('res')
    if(ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0){
        //window.alert('[ERRO!] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }
    else {
       res.innerHTML = 'Contando:<br>' 
        let i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pa.value)
        if(p <= 0){
            window.alert('Passo inválido!,Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let c = i;c <= f;c += p){
            res.innerHTML += `${c} \u{1f449}` }
        }
        else{
            for(c = i;c >= f;c-= p){
            res.innerHTML += `${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`  
    }
}
        













