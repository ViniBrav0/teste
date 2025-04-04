// Objetos
let pessoa = {
    nome: "Vini",
    idade: 19, 
    peso: 100,
    altura : 170
}
// desatribuição de objetos
console.log(pessoa.peso)

const { peso, altura } = pessoa
console.log(peso)
console.log(altura)

// propagação de objetos
const endereco ={
    cidade: "Brasília",
    uf: "DF",
}
const pessoaCompleto= { 
    ...pessoa,
    ...endereco,

}

console.log(pessoaCompleto)

// funções

function somar(numA, numB) {
    const resultado = numA + numB
    console.log(resultado)
    
}

// Uso
somar(888,789)