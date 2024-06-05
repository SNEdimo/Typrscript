function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof msg !== 'string' ? reject('cai no erro') : resolve(msg)
        }, tempo);
    });



}

// esperaAi(`Buscando os dados da base`, rand(1,5))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi(`Processando os dados da base`, rand(1,5))
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi(`Pronto`, rand(1,5))
//     })
//     .then(resposta => {
//         console.log(resposta);
//     }).catch(e => console.log(e))

async function execulta() {
    try{
        const fase1 = await esperaAi(`Buscando os dados da base`, rand(1,5));
        console.log(fase1)
        const fase2 = await esperaAi(`Processando os dados`, rand(1,5));
        console.log(fase2)
        const fase3 = await esperaAi(`Finalizando...`, rand(1,5));
        console.log(fase3)
        const fase4 = await esperaAi(`Pronto`, rand(1,5));
        console.log(fase4)
    } catch(e){
        console.log(e);
    }
}
execulta();
