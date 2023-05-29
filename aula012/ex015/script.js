function Verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] verifique os dados e tente novamente')} 

else {
    var fsex = window.document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genêro = ""
var img = document.createElement('img')
img.setAttribute('id', 'foto')}

if(fsex[0].checked){
    genêro = 'homem'
    if(idade >= 0 && idade < 10){
         //criança
         img.setAttribute('src', 'foto-bebe-m.png')
    }
   
    else if(idade < 21){
        //jovem 
        img.setAttribute('src', 'foto-jovem-m.png')
    }
   
    else if(idade < 50){
        //adulto
        img.setAttribute('src', 'foto-adulto-m.png')
    }
    
    else if (idade > 50){
        img.setAttribute('src', 'foto-idoso-m.png')
        //idoso 
    }
    
}
if(fsex[1].checked){
    genêro = 'mulher'
if(idade >= 0 && idade < 10){
    //criança
    img.setAttribute('src', 'foto-bebe-f.png')
}

else if(idade < 21){
   //jovem 
   img.setAttribute('src', 'foto-jovem-f.png')
}

else if(idade < 50){
    //adulto
    img.setAttribute('src','foto-adulto-f.png')
}

else if (idade > 50){
    img.setAttribute('src', 'foto-idoso-f.png')
  //idoso  
}

}
res.style.textAlign = 'center'
res.innerHTML = (`Detectamos ${genêro} com ${idade} anos de idade ! </br>`)
res.appendChild(img)


}

