const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    });

    xhr.send();
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina.call(el)
    }
});


function carregaPagina() {
    const href = this.getAttribute('href');
    console.log(`gerando pagina ${href}`);
    request({
        method: 'GET',
        url: href,
        success(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log(errorText)
        }
    });
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}