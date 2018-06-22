const personagens = ["wilson", "willow", "wolfgang", "wx78", "woodie", "wendy", "wes", "maxwell"];

const imagens = embaralhar(duplicar(personagens));

const cartas = document.querySelectorAll(".item");
const erros = document.querySelector("#erros");
let tentativas = 0;

let jogando = false;
let corretos = 0;

let pontuadores = [];
if(localStorage.top3Memoria){
    pontuadores = JSON.parse(localStorage.top3Memoria);
}

preencherPontuadores();

for (let carta of cartas){
    carta.onclick = clicar;
}