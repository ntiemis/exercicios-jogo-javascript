function adicionarPontuador(){
    let nomePontuador = prompt("Você ficou entre os três melhores!\nDigite seu nome:");
    pontuador = {nome: nomePontuador, pontos: tentativas};
    pontuadores.push(pontuador);
    pontuadores = ordenarPontuadores(pontuadores);
    localStorage.top3Memoria = JSON.stringify(pontuadores);
    preencherPontuadores();
}

function atualizarPontuadores(){
    if(pontuadores.length < 3){
        adicionarPontuador();
    }
    else{
        for(let pontuador of pontuadores){
            if(pontuador.pontos > tentativas){
                pontuadores.pop();
                adicionarPontuador();
                return;
            }
        }
    }
}

function preencherPontuadores(){
    const lista = document.querySelector("#top3");
    lista.innerHTML = "";
    for(let pontuador of pontuadores){
        let li = document.createElement("li");
        let p = document.createElement("p");

        p.innerHTML = `${pontuador.nome}: ${pontuador.pontos}`;
        li.appendChild(p);
        lista.appendChild(li);
    }
}

function travar(){
    for(let carta of cartas){
        carta.onclick = null;
    }
}

function destravar(){
    for(let carta of cartas){
        if(!carta.classList.contains("correto")){
            carta.onclick = clicar;
        }
    }
}

function desativar(carta){
    carta.classList.remove("ativo");
    carta.style.backgroundImage = "url('imgs/logo.png')"
    carta.onclick = clicar;
}

function ativar(carta){
    carta.classList.add("ativo");
    carta.style.backgroundImage = `url('imgs/${imagens[Number(carta.id)]}.png')`;
    carta.onclick = null;
}

function verificar(){
    let ativos = document.querySelectorAll(".ativo");
    if(ativos[0].style.backgroundImage === ativos[1].style.backgroundImage){
        for(let carta of ativos){
            carta.classList.remove("ativo");
            carta.classList.add("correto");
        }
        corretos++;
    }
    else{
        for(let carta of ativos){
            desativar(carta);
        }
        tentativas++;
        erros.innerHTML = tentativas;
    }
    destravar();
    if(corretos === 8){
        atualizarPontuadores();
        alert("Fim de jogo!");
    }
}

function clicar(){
    
    if(jogando){
        jogando = false;
    }
    else{
        jogando = true;
    }
    
    if(this.classList.contains("ativo")){
        desativar(this);
    }
    else{
        ativar(this);
    }

    if(!jogando){
        travar();
        setTimeout(verificar, 1000);
    }
}