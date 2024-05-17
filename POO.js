function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade

    Dados(nome, idade)
}

function Dados(nome, idade){
    console.log(`Nome: ${nome}\nIdade: ${idade}`)
}

const p = new Pessoa("Felps", 21)
