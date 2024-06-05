function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

//factory de pessoas
/*
function CriaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
*/
const p1 = new Pessoa("Felps", "Horlando")

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, "nome", {
        value: nome,
        writable: false,
        configurable: false
    })
    this.preco = preco
    this.estoque = estoque

}

const pr = new Produto("veja", 20, 100)
console.log(pr)