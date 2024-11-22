function adicionarItem(nomeProduto, tipoProduto, quantidade) {
  const container = document.getElementById("itensContainer");
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.innerHTML = `
    <select class="tipo" required>
      <option value="${tipoProduto + " - " + nomeProduto}" selected>${tipoProduto + " - " + nomeProduto}</option>
    </select>
    <input type="number" class="quantidade" value="${quantidade}" min="1" required>
    <button type="button" onclick="removerItem(this)">Remover</button>
    `;
  container.appendChild(newItem);
} 

    // Função para carregar os produtos do localStorage ao abrir a página
    function carregarProdutosOrcamento() {
      const produtos =
        JSON.parse(localStorage.getItem("produtosOrcamento")) || [];
      produtos.forEach((produto) => {
        adicionarItem(produto.nome, produto.tipo, produto.quantidade);
      });
    }
  
    // Função para remover item baseado no índice ou nome
      function removerItem(button) {
          const item = button.parentNode;
          item.parentNode.removeChild(item);
  
          // Também é importante atualizar o localStorage, caso esteja salvando os itens lá
          let produtos = JSON.parse(localStorage.getItem("produtosOrcamento")) || [];
          const tipoProduto = item.querySelector(".tipo").value;
  
          const itemIndex = produtos.findIndex(
              (produto) => produto.tipo === tipoProduto
          );
  
          
          produtos.splice(itemIndex, 1);
          localStorage.setItem("produtosOrcamento", JSON.stringify(produtos));
          console.log(`Item "${tipoProduto}" removido do orçamento.`);
          
      }
  
    // Chamar a função ao carregar a página
    window.onload = carregarProdutosOrcamento;
  
    function enviarOrcamento() {
      const nome = document.getElementById("nome").value;
      const itens = document.querySelectorAll(".item");
      let mensagem = `Nome: ${nome}\nPeças:\n`;
      itens.forEach((item) => {
        const tipo = item.querySelector(".tipo").value;
        const quantidade = item.querySelector(".quantidade").value;
        if (quantidade > 0) {
          mensagem += `- Tipo: ${tipo}, Quantidade: ${quantidade}\n`;
        }
      });
      const numero = "5519994673424"; // Número com o código do Brasil
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(
        mensagem
      )}`;
      window.open(url, "_blank");
    }
  function enviarOrcamento() {
    const nome = document.getElementById("nome").value;
    const itens = document.querySelectorAll(".item");
    let mensagem = `Nome: ${nome}\nPeças:\n`;
    itens.forEach((item) => {
      const tipo = item.querySelector(".tipo").value;
      const quantidade = item.querySelector(".quantidade").value;
      if (quantidade > 0) {
        mensagem += `- Tipo: ${tipo}, Quantidade: ${quantidade}\n`;
      }
    });
    const numero = "5519994673424"; // Número com o código do Brasil
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  }