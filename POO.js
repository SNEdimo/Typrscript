function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.dados = function() {
    console.log(`Nome: ${this.nome}\nIdade: ${this.idade}`)
}

const p = new Pessoa("Felps", 21)
const p1 = new Pessoa("Amanda", 34)

p.dados()
p1.dados()


function Empregado(nome, idade, cargo){
    Pessoa.call(this, nome, idade)
    this.cargo = cargo
}
Empregado.prototype
Empregado.prototype = Object.create(Pessoa.prototype)


const em = new Empregado("Jorge", 44, "Empresario")

console.log(em.cargo)
em.dados()