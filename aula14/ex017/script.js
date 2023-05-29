function lista(){
    let num = window.document.getElementById('num')
    let tab = window.document.getElementById('Lista')
    if(num.value.length == 0 ){
        window.alert('Digite um número por favor!')
    }
    else{
     let n = Number(num.value)
     let c = 1
     tab.innerHTML = ''
     while(c <= 10){
        let item = window.document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
     }
    }
    
}