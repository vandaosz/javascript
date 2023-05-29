console.log('Lei do voto.')
var idade = 63
console.log(`Você tem ${idade} anos de idade`)
if (idade < 16){
    console.log('Você não vota!')
}
else if(idade >= 16 && idade < 63){
    console.log(`Seu voto é obrigatório!`)
}
else if(idade >= 63){
    console.log(`Seu voto não é obrigatório!`)
}