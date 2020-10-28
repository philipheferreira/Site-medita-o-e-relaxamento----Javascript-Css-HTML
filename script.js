const container = document.querySelector('.container')
const texto = document.querySelector('#texto')

const tempoTotal = 7500
const tempoRespiracao = (tempoTotal/5) *2
const tempoPrenderRespiracao = tempoTotal / 5

animacaoRespiracao()


function animacaoRespiracao () { 
    texto.innerHTML = "Inspire fundo!!!"
    container.className = "container cresce"

    setTimeout(() => { 
        texto.innerText = "Segure a respiração"

        setTimeout(() => { 
            texto.innerText = "Solte a respiração"
            container.className = "container encolher"
        }, tempoPrenderRespiracao)
    }, tempoRespiracao)
}

setInterval(animacaoRespiracao, tempoTotal)