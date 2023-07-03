import ExibirLivros from './exibirLivros';

const FiltrarLivros = (listaLivros) => {
  const botoesFiltros = document.querySelectorAll('.btn');

  function filtroCategoria(event) {
    const categoriaFiltrada = event.currentTarget.value;
    const livrosFiltrados = listaLivros.filter((livro) => livro.categoria === categoriaFiltrada);

    ExibirLivros(livrosFiltrados);
  }

  botoesFiltros.forEach((btn) => btn.addEventListener('click', filtroCategoria));
};

export default FiltrarLivros;
