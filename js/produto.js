function filtrarPorCategoria(categoria) {
    const produtos = document.querySelectorAll(".product-card");

    produtos.forEach(produto => {
        // Verifica se o produto possui a classe da categoria selecionada
        if (produto.classList.contains(categoria)) {
            produto.style.display = "block"; // Mostra o produto da categoria selecionada
        } else {
            produto.style.display = "none"; // Esconde os produtos de outras categorias
        }
    });
}

// Exibe todos os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".product-card");
    produtos.forEach(produto => produto.style.display = "block");
});

    document.addEventListener("DOMContentLoaded", function() {
            // Animação dos produtos quando a página é carregada
            const produtos = document.querySelectorAll('.product-card');

            produtos.forEach((produto, index) => {
                // Adiciona um pequeno atraso para cada produto, criando um efeito de escada
                produto.style.animationDelay = `${index * 0.03}s`;
            });
        });

    document.addEventListener("DOMContentLoaded", function() {
        const barraDePesquisa = document.getElementById("barraDePesquisa");
        barraDePesquisa.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                filtrarProdutos();
            }
        });
    });


    

    function filtrarProdutos() {
    const termoDePesquisa = document.getElementById("barraDePesquisa").value.toLowerCase(); // Termo de pesquisa
    const produtos = document.querySelectorAll(".product-card"); // Todos os produtos

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector("h2").textContent.toLowerCase(); // Nome do produto
        const tipoProduto = produto.querySelector("p").textContent.toLowerCase(); // Tipo de venda

        // Se o nome ou o tipo do produto contiver o termo pesquisado, exibe o produto; caso contrário, oculta
        if (nomeProduto.includes(termoDePesquisa) || tipoProduto.includes(termoDePesquisa)) {
            produto.style.display = "block"; // Mostra o produto
        } else {
            produto.style.display = "none"; // Esconde o produto
        }
    });
}

// Detecta quando a tecla "Enter" é pressionada e executa a busca
const barraDePesquisa = document.getElementById("barraDePesquisa");
barraDePesquisa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filtrarProdutos(); // Chama a função de pesquisa
    }
});



    // Permitir apenas números no campo de entrada
    const numericInput = document.getElementById('numericInput');

    numericInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, ''); // Remove qualquer caractere que não seja um número
    });

    // Variáveis para armazenar a posição anterior e a posição atual da rolagem
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

       // Função para adicionar produto ao orçamento
function adicionarAoOrcamento(nomeProduto, tipoProduto, quantidade) {
    if (quantidade > 0) {
        // Salvar no localStorage para ser acessado na página de orçamento
        let produtos = JSON.parse(localStorage.getItem('produtosOrcamento')) || [];
        produtos.push({ nome: nomeProduto, tipo: tipoProduto, quantidade: quantidade });
        localStorage.setItem('produtosOrcamento', JSON.stringify(produtos));
        alert('Produto adicionado ao orçamento!');
    } else {
        alert('Por favor, selecione uma quantidade válida.');
    }
}
document.querySelectorAll('.botaoadicionar').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h2').innerText;
        const productQty = productCard.querySelector('.quantidadedeprodutos').value;

        // Recupera itens existentes no localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Adiciona novo item ao carrinho
        cartItems.push({
            name: productName,
            quantity: productQty
        });

       

        // Armazena novamente no localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert(`${productName} adicionado ao orçamento com quantidade de ${productQty}`);
    });
});