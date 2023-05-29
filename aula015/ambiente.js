let num = [2,4,3,532,712,4,6,7,8,9,87,6,5]
num.push(1)
num[3] = 8
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(5)
if (pos == -1){
    console.log('O valor não existe no vetor')
}
else{
    console.log(`O valor está na posição ${pos}`)
}
num.sort((a, b) => a - b)
console.log(num)
