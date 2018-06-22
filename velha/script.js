let vez = 1;
let vencedor = "";

velha (function(){

});

    function casasIguais(a, b, c){
        let casaA = velha("#casa"+a);
        let casaB = velha("#casa"+b);
        let casaC = velha("#casa"+c);
        let bgA = velha("#casa"+a).css("background-image");
        let bgB = velha("#casa"+b).css("background-image");
        let bgC = velha("#casa"+c).css("background-image");
        if( (bgA === bgB) && (bgB === bgC) && (bgA !== "none" && bgA !== "")){
            if(bgA.indexOf("x.png") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        }
        else{
            return false;
        }
    }
    
    function verificarFimDeJogo(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ){
                velha("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
                velha(".casa").off("click");
        }
    }
    
    velha(".casa").click(function(){
        var bg = velha(this).css("background-image");
        if(bg === "none" || bg === "")
        {          
            var fig = "url(" + vez.toString() + ".png)";
            velha(this).css("background", fig);
            vez = (vez === 1? 2:1); 
            verificarFimDeJogo();
        }
    });
