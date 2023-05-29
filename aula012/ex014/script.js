function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var date1 = new Date()
var hour1 = date1.getHours()
msg.innerHTML = (`Agora são ${hour1} horas`)
if(hour1 >= 0 && hour1 < 12){
//bom dia!
img.src = 'fotomanha.png'
document.body.style.background = '#e2cd9f'
}
else if(hour1 >= 12 && hour1 < 18){
//boa tarde!
img.src = 'fototarde.png'
document.body.style.background = '#b9846f'
}
else {
//boa noite!
img.src = 'fotonoite.png'
document.body.style.background = '#515154'
}

}