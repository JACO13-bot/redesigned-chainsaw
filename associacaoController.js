function associar(req, res) {
  res.end("Produto associado ao fornecedor");
}

function desassociar(req, res) {
  res.end("Associação removida");
}

module.exports = {
  associar,
  desassociar
};
