function tempo(){
    var agora = new Date()
    //var hora = agora.getHours()
    var tempo1 = window.document.getElementById('res')
    var hora = 14
    if(hora >= 0 && hora < 12){
      tempo1.innerHTML = `${hora}`
      document.body.style.background = 'green'
    }
    else if(hora > 12 && hora < 18){
        tempo1.innerHTML = `${hora}`
        document.body.style.background = 'yellow'
    }
}