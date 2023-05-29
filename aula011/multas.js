function verificar(){
    let vel = window.document.getElementById('vel')
   let num = Number(vel.value)
   let res = window.document.getElementById('res')
   if(num > 60){
    res.innerHTML = (`${num} vc foi MULTADO!`)
   }
   else{
    res.innerHTML = 'j'
   }
}