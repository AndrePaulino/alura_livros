const AplicarDesconto = (livros) => {
  const descontoPorcento = 0.3;

  const livrosDescontados = livros.map((livro) => ({
    ...livro,
    preco: livro.preco - (livro.preco * descontoPorcento),
  }));

  return livrosDescontados;
};

export default AplicarDesconto;
