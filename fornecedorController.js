function criarFornecedor(req, res) {
  res.end("Fornecedor criado");
}

function listarFornecedores(req, res) {
  res.end("Lista de fornecedores");
}

module.exports = {
  criarFornecedor,
  listarFornecedores
};
