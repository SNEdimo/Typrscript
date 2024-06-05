const nome = "Ana";
const sobrenome = "Maria";

const falando = function(){
    console.log(`Nome: ${nome}\nSobrenome: ${sobrenome}`);
}

exports.nome = nome;
exports.sobrenome = sobrenome;

module.exports.mul = (x,y) => {
    return x * y;
}

module.exports.sum = (x,y) => {
    return x + y;
}
