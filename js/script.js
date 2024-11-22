
/* VER MAIS SOBRE A EMPRESA */

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões "Ver mais"
    const botoesVerMais = document.querySelectorAll(".ver-mais");

    // Adiciona evento de clique para cada botão
    botoesVerMais.forEach((botao) => {
        botao.addEventListener("click", () => {
            const caixa = botao.closest(".caixa");
            const textoCompleto = caixa.querySelector(".texto-completo");
            const textoResumido = caixa.querySelector(".texto-resumido");

            // Alterna a exibição do texto completo
            if (textoCompleto.style.display === "none" || textoCompleto.style.display === "") {
                textoCompleto.style.display = "block"; // Mostra o texto completo
                textoResumido.style.display = "none"; // Esconde o texto resumido
                botao.textContent = "Ver menos"; // Muda o texto do botão
            } else {
                textoCompleto.style.display = "none"; // Esconde o texto completo
                textoResumido.style.display = "block"; // Mostra o texto resumido
                botao.textContent = "Ver mais"; // Restaura o texto do botão
            }
        });
    });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000); // Troca de imagem a cada 3 segundos

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
