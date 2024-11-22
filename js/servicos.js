// Animação dos serviços na página de serviços
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".servico-container");
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });

    carregarProdutosOrcamento(); // Carrega produtos salvos no orçamento
});

// Função para mostrar o formulário de orçamento
function mostrarFormulario(tipoServico) {
    const formulario = document.getElementById("formulario");
    const overlay = document.getElementById("overlay");

    if (formulario && overlay) {
        document.getElementById("tipoServico").value = tipoServico;
        formulario.style.display = "block"; // Exibe o formulário
        overlay.style.display = "block"; // Exibe o fundo escurecido
    } else {
        console.error("Erro: Elementos do formulário não encontrados.");
    }
}


// Adicionar item ao orçamento
function adicionarAoOrcamento() {
    const tipoServico = document.getElementById('tipoServico').value;
    const produto = document.getElementById('modeloEquipamento').value;
    const quantidade = document.getElementById('quantidadeEquipamento').value;
    const descricao = document.getElementById('descricaoProblema').value;

    if (produto.trim() === "" || quantidade.trim() === "" || Number(quantidade) <= 0 || descricao.trim() === "") {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Atualiza os produtos no localStorage
    let produtos = JSON.parse(localStorage.getItem('produtosOrcamento')) || [];
    produtos.push({ nome: produto, tipo: tipoServico, quantidade, descricao });
    localStorage.setItem('produtosOrcamento', JSON.stringify(produtos));

    alert("Adicionado ao orçamento com sucesso!");
    fecharFormulario();

    // Atualiza a área de orçamento
    adicionarItem(produto, tipoServico, quantidade);
}

// Fechar formulário
function fecharFormulario() {
    document.getElementById('tipoServico').value = '';
    document.getElementById('modeloEquipamento').value = '';
    document.getElementById('quantidadeEquipamento').value = '';
    document.getElementById('descricaoProblema').value = '';
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Carregar produtos do localStorage ao abrir a página
function carregarProdutosOrcamento() {
    const produtos = JSON.parse(localStorage.getItem("orcamento")) || [];
    const container = document.getElementById("itensContainer");
    container.innerHTML = ""; // Limpa para evitar duplicação

    produtos.forEach((produto) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <span>${produto.tipo} - ${produto.modelo}</span>
            <span>Quantidade: ${produto.quantidade}</span>
            <button type="button" onclick="removerItem(this)">Remover</button>
        `;
        container.appendChild(item);
    });
}

// Remover item do orçamento
function removerItem(button) {
    const item = button.parentElement;
    const tipoModelo = item.querySelector("span").textContent;
    const orcamento = JSON.parse(localStorage.getItem("orcamento")) || [];

    const novoOrcamento = orcamento.filter(
        (produto) => `${produto.tipo} - ${produto.modelo}` !== tipoModelo
    );

    localStorage.setItem("orcamento", JSON.stringify(novoOrcamento));
    item.remove();
}

// Enviar orçamento via WhatsApp
function enviarOrcamento() {
    const orcamento = JSON.parse(localStorage.getItem("orcamento")) || [];
    if (orcamento.length === 0) {
        alert("Nenhum item no orçamento para enviar.");
        return;
    }

    const mensagem = orcamento
        .map(
            (item) =>
                `- Tipo: ${item.tipo}, Modelo: ${item.modelo}, Quantidade: ${item.quantidade}, Descrição: ${item.descricao}`
        )
        .join("\n");

    const numero = "5519994673424"; // Substitua pelo número desejado
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
function resetForm() {
    document.getElementById("tipoServico").value = "";
    document.getElementById("modeloEquipamento").value = "";
    document.getElementById("quantidadeEquipamento").value = "";
    document.getElementById("descricaoProblema").value = "";
}

