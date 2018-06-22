let casa1 = document.querySelector("#casa1");
let casa2 = document.querySelector("#casa2");
let casa3 = document.querySelector("#casa3");
let casa4 = document.querySelector("#casa4");
let casa5 = document.querySelector("#casa5");
let casa6 = document.querySelector("#casa6");
let casa7 = document.querySelector("#casa7");
let casa8 = document.querySelector("#casa8");
let casa9 = document.querySelector("#casa9");
let quadradinho = [casa1,casa2,casa3,casa4,casa5,casa6,casa7,casa8,casa9]
let jogadorUm = 'X';
let ganhador = false;
let jogadorDois = 'O';
let i = 1;

function diagonal(){
    if((casa1.innerHTML === "X" && casa2.innerHTML === "X" &&  casa2.innerHTML === "X") || (casa4.innerHTML === "X" && casa5.innerHTML === "X" && casa6.innerHTML === "X") || (casa7.innerHTML === "X" && casa8.innerHTML === "X" && casa9.innerHTML === "X")){
        encerrar();
        ganhador = true;
    }
    
    if((casa1.innerHTML === "X" && casa4.innerHTML === "X" &&  casa7.innerHTML === "X") || (casa2.innerHTML === "X" && casa5.innerHTML === "X" && casa8.innerHTML === "X") || (casa3.innerHTML === "X" && casa6.innerHTML === "X" && casa9.innerHTML === "X")){
        encerrar();
        ganhador = true;
    }
}

function encerrar(){
    
    for(let quadradinho of quadrados){
        quadradinho.onclick = null;
    }

    h1.innerHTML = "Parábens,  Você Ganhou!";
}

function jogar(){

    if(!ganhador && i === 9){
        h1.innerHTML = 'VELHA !!';
    }

    if(i % 2 === 0){
        this.innerHTML = jogadorDois;
    }

    else{
        this.innerHTML = jogadorUm;
    }

    i++;
    this.onclick = null;
    verificarFim();
}


function verificarFim(){
    for(let j = 0; j < 9; j += 3){   
        if(quadrados[j].innerHTML !== '.' && quadrados[j].innerHTML === quadrados[j + 1].innerHTML && quadrados[j + 1].innerHTML === quadrados[j + 2].innerHTML){
            encerrar();
            ganhou = true;
        }
    }
    for(let j = 0; j < 3; j += 1){   
        if(quadrados[j].innerHTML !== '.' && quadrados[j].innerHTML === quadrados[j + 3].innerHTML && quadrados[j + 3].innerHTML === quadrados[j + 6].innerHTML){
            encerrar();
            ganhou = true;
        }
    }
    
    diagonal();    
}

for(let quadrado of quadrados){
    quadrados.onclick = jogada;
}

