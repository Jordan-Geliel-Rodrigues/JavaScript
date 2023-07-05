var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora > 4 && hora <= 12) {
    console.log('Bom Dia!')
} else if (hora >= 13 && hora <= 18) {
    console.log ('Boa Tarde!')
} else if (hora >= 0 && hora <= 4) {
    console.log('Boa Madrugada')
} else {
    console.log('Boa noite!')
}