//console
console.log(`helloo world!\nestou aprendendo java script!`);


const a = "Fabio";
console.log(`Meu nome é ${a}`);

//variavel
let be = NaN;
var bE = 'l';
const de = null;
console.log(bE, be, de);

//calculo
const nome = 'jão';
const idade = 24;
const altura = 1.78;
const peso = 73.5;
let imc;
imc = peso/Math.pow(altura,2);

if(imc < 18.5){
    console.log(`IMC: ${imc}\nAbaixo do peso`);
} else if(imc >= 18.5 && imc < 25){
    console.log(`IMC: ${imc}\nPeso normal`);
} else if(imc >= 25 && imc < 30){
    console.log(`IMC: ${imc}\nSobrepeso`);
} else if(imc >= 30 && imc < 35){
    console.log(`IMC: ${imc}\nObesidade grau I`);
} else if(imc >= 35 && imc < 40){
    console.log(`IMC: ${imc}\nObesidade grau II`);
} else if(imc >= 40){
    console.log(`IMC: ${imv}\nObesidade grau III ou Morbida`);
}

//






