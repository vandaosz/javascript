let valores = [1,6,3,7,35,5]
/*console.log(valores)
for(let pos = 0;pos < valores.length;pos++) {
    console.log(`A  posição ${pos} tem o valor ${valores[pos]}`)
}


for(let pos in valores){
    console.log(`A  posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let modelos = ['hatch','sedan','caminhonete']
console.log(`${modelos}`)
  /*for(let carro in modelos){
    console.log(`Na posição ${carro} está o modelo ${modelos[carro]}`)
}*/
for(let carro = 0;carro < modelos.length;carro++){
    console.log(`Na vaga ${carro} está o modelo ${modelos[carro]}`)
}
let motocicletas = ['fan 160','bros 160','cargo 160','titan 160']
motocicletas.push('fan125')
motocicletas[0] = 'cg 99'
motocicletas.sort()
for(let pos in motocicletas){
    console.log(`Na posição ${pos} está a ${motocicletas[pos]} `)
}
let search = motocicletas.indexOf('cargo 160')

if(search == -1){
    console.log(`Não existe no vetor!`)
}else{
    console.log(`A motocicleta ${motocicletas[search]} está na posição ${search} do vetor!`)
}
