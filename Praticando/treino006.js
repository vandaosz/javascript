var modelo = 'sedan'

switch(modelo){
case ('hatch'):
console.log('Compra efetuada com sucesso!')
break
case 'sedan':
console.log('Tem certeza que não prefere um modelo hatch?')
break
case 'motocicletas':
    console.log('Não trabalhamos com este tipo de veiculo aqui!')
break
case 'caminhonetes':
console.log('Estamos em falta deste tipo de veículo')
break
default:
    console.log('Trabalhamos apenas com veículos terrestres!')
}