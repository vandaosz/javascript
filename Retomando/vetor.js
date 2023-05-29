let num = [4,8,10,3]
num.push(7)
num.sort((a, b) => a - b)
for(pos in num){                                                    //Não precisa de encremento pq no for in a variável deste caso 'pos' ela conta as posicões,ou chaves
    console.log(`Na posição ${pos} está o valor ${num[pos]}`)
}
console.log(`${num[0]}`)
console.log('________')
for(var pos = 0;pos < num.length;pos++){                    
    console.log(`Na posição ${pos} está o valor ${num[pos]}`)
}var pos = num.indexOf(7)


console.log(pos)