function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(msg);
        }, tempo);
    });



}

esperaAi(`Buscando os dados da base`, rand(1,5))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(`Processando os dados da base`, rand(1,5))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(`Finalizando`, rand(1,5))
    })
    .then(resposta => {
        console.log(resposta);
    }).catch()


    //Promise.all;  Promise.race; Promise.resolve; Promise.reject;

    const promisse = [`primeiro valor`,
        esperaAi(`promise 1`, 1,2),
        esperaAi(`promise 2`, 1,2),
        esperaAi(`promise 3`, 1,2),
        `outro valor`
    ]

    Promise.all(promisse)
        .then(function(valor){
            console.log(valor);
        })
        .catch(function(error){
            console.log(error);
        })