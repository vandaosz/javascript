function carregar(){
    let agora = new Date()
    let hora = agora.getHours()
    let msg = document.getElementById('msg')
    let foto = document.getElementById('photo')
    let img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    if(hora >= 0 && hora <= 12)
   {
    img.setAttribute('src','fotomanha.png')
    document.body.style.background = '#e2cd9f'
   }
   else if(hora <= 18){
    img.setAttribute('src','fototarde.png')
    document.body.style.background = '#b9846f'
   }
   else if(hora > 18){
    img.setAttribute('src', 'fotonoite.png')
    document.body.style.background = '#515154'
   }
    msg.style.textAlign += 'center'
    foto.innerHTML += (` Agora são ${hora} horas!`)
    msg.appendChild(img)
   
}