window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.getElementById('chute');



const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);
const att = document.querySelector('.box');

function onSpeak(param){

    chute = param.results[0][0].transcript;
    exibeChute(chute);
    verificaValorValido(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML= `
        <div>Você disse:</div>
        <span class="box"> ${chute} </span>
    `
}

recognition.addEventListener('end',() => recognition.start());


