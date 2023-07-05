var num = [5, 8, 2, 9, 3, 7]
num.push(0)
num.sort()
console.log(`Nosso vetor é o ${num} e tem ${num.length}`)
console.log(`O primeiro elemento é ${num[0]}`)
var pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 3 esta no elemento ${pos}`)
}