function verificaValorValido(chute){
    const numero =  +chute;
    if(chuteValido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML +=
        `
        <div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return;
    }

    if( numero === numeroSecreto){
        document.body.innerHTML = 
        `
        <h2>Você acertou!</h2>
        <h3>O numero secreto é ${numeroSecreto}</h3>
        <button id="jogar-novamente" class ="btn-jogar"> Jogar novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteValido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') window.location.reload();
})