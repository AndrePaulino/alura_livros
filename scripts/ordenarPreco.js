import ExibirLivros from './exibirLivros';

const OrdenarLivrosPreco = (listaLivros) => {
  const ordenarBtn = document.querySelector('#btnOrdenarPorPreco');

  function ordenarPorPreco() {
    const livrosOrdenados = listaLivros.sort((a, b) => a.preco - b.preco);

    ExibirLivros(livrosOrdenados);
  }

  ordenarBtn.addEventListener('click', ordenarPorPreco);
};

export default OrdenarLivrosPreco;
