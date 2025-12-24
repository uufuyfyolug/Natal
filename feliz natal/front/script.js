const cores = [
    "yellow", "green", "red", "blue",
    "pink", "turquoise", "purple", "orange"
];

// cria luzinhas espalhadas
for (let i = 0; i < 220; i++) {
    const luz = document.createElement("div");
    luz.classList.add("luz");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    luz.style.left = x + "px";
    luz.style.top = y + "px";

    function mudarCor() {
        const indice = Math.floor(
            (x * y + Date.now()) % cores.length
        );
        luz.style.background = cores[indice];
        luz.style.color = cores[indice];
    }

    mudarCor();
    setInterval(mudarCor, 500 + (x % 600));

    document.body.appendChild(luz);
}

// lógica dos botões
function escolherMensagem(resposta) {
    const titulo = document.getElementById("titulo");
    const mensagem = document.getElementById("mensagem");

    if (resposta === "sim") {
        titulo.innerText = "🎄 Escolha seu nome abaixo 🎄";
        mensagem.innerText = "";
    } else {
        titulo.innerText = "Resposta errada FDP 😊";
        mensagem.innerText = "Responde certo ✨";
    }
}

// mensagem personalizada
document.getElementById("pessoa").addEventListener("change", function () {
    const nome = this.value;
    const mensagem = document.getElementById("mensagem");
    
    if (nome === "Mia") {
        mensagem.innerText =
            `🎁 Feliz Natal para a minha melhor amiga do mundo!!!🎄✨`;

    }else if (nome === "Amanda") {
        mensagem.innerText =
            `🎁 Feliz Natal para a melhor pessoa que eu conheci esse ano!!!🎄✨`;

    }else if (nome === "Sor Gabriel") {
        mensagem.innerText =
            `🎁 Feliz Natal para o melhor professor e um amigo incrível!!!🎄✨`;

    }else if(nome === "Felipe Maia") {
        mensagem.innerText =
            `🎁 Um Feliz Natal para o meu aleijado favorito!!!🎄✨`;
    } else {
        mensagem.innerText = "";
    }

});



