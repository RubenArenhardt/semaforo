const botoes = document.getElementById("botoes");
const imagem = document.getElementById("imagem");
let index = 0;
let automatico = null;

const ativador = (event) => {
    clearInterval(automatico);
    opcoes[event.target.id]();
}

const opcoes = {
    "desligado": () => imagem.src="img/desligado.png",
    "verde": () => imagem.src="img/verde.png",
    "amarelo": () => imagem.src="img/amarelo.png",
    "vermelho": () => imagem.src="img/vermelho.png",
    "automático": () => automatico = setInterval(mudaAuto, 1000)
};


function mudaAuto() {
    const cores = ["verde", "amarelo", "vermelho"];
    const cor = cores[index];
    opcoes[cor]();
    index = index < 2 ? index+1 : 0; 
};


botoes.addEventListener("click", ativador);