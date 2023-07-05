var idade = 68
if (idade < 16) {
    console.log('Não Vota')
} else {
    if (idade >= 16 && idade < 18 || idade > 67) {
        console.log('Voto opcional')
    }
    else {
        console.log('Voto Obrigatorio')
    }
}