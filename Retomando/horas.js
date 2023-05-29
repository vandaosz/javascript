agora = new Date()
hora = 19//agora.getHours()
if(hora >= 0 && hora < 12){
    console.log("Bom dia!")
}
else if(hora > 12 && hora <= 18){
    console.log("Boa tarde!")
}
else if(hora > 18){
    console.log("Boa noite!")
}