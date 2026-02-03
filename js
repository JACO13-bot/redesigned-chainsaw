function criarProduto(req, res) {
  res.end("Produto criado");
}

function listarProdutos(req, res) {
  res.end("Lista de produtos");
}

module.exports = {
  criarProduto,
  listarProdutos
};
