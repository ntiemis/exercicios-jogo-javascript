
function obterPalavra (){

    let texto = new Array ();
    texto[0] = ["M","A","S","T","E","R","T","E","C","H"];
    texto[1] = ["F","A","C","E","B","O","O","K","",""];
    texto[2] = ["P","R","O","G","R","A","M","A","R",""];
    texto[3] = ["E","S","T","U","D","A","R","","",""];
    texto[4] = ["T","R","A","B","A","L","H","O","",""];
    texto[5] = ["J","A","V","A","S","C","R","I","P","T"];
    texto[6] = ["C","O","M","P","U","T","A","D","O","R"];
    texto[7] = ["E","S","T","A","C","A","O","","",""];

    let i = Math.floor(Math.random()*8);
 console.log(texto[i]);
 
    document.querySelector("#casaUm").innerHTML = (texto[i][0]);
    document.querySelector("#casaDois").innerHTML = (texto[i][1]);
    document.querySelector("#casaTres").innerHTML = (texto[i][2]);
    document.querySelector("#casaQuatro").innerHTML = (texto[i][3]);
    document.querySelector("#casaCinco").innerHTML = (texto[i][4]);
    document.querySelector("#casaSeis").innerHTML = (texto[i][5]);
    document.querySelector("#casaSete").innerHTML = (texto[i][6]);
    document.querySelector("#casaOito").innerHTML = (texto[i][7]);
    document.querySelector("#casaNove").innerHTML = (texto[i][8]);
    document.querySelector("#casaDez").innerHTML = (texto[i][9]);

    if(letra=(texto[i][0]){
        document.querySelector("#casaUm").classList.add("letrasCertas");
    } else {
        document.querySelector("#letrasescolhidas").innerHTML = (texto[i][0])
    }

}

let letra = prompt ("Digite uma letra");

onClick=obterPalavra();
