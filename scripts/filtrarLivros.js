import ExibirLivros from './exibirLivros';

const containerValorTotalDisponiveis = document.querySelector('#valor_total_livros_disponiveis');
const botoesFiltros = document.querySelectorAll('.btn');

function filtrarPorCategoria(listaLivros, categoriaFiltrada) {
  return listaLivros.filter((livro) => livro.categoria === categoriaFiltrada);
}

function filtrarPorDisponibilidade(listaLivros) {
  return listaLivros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotal(valorTotal) {
  containerValorTotalDisponiveis.innerHTML = `
      <div class="livros__disponiveis">
        <p>
          Todos os livros disponíveis por R$
          <span id="valor">${valorTotal}</span>
        </p>
      </div>
      `;
}

function calcularValorTotalDisponiveis(livrosFiltrados) {
  return livrosFiltrados.reduce((acc, livro) => (acc + livro.preco), 0).toFixed(2);
}

const FiltrarLivros = (listaLivros) => {
  function filtroCategoria(event) {
    const categoriaFiltrada = event.currentTarget.value;

    const livrosFiltrados = categoriaFiltrada === 'disponivel'
      ? filtrarPorDisponibilidade(listaLivros)
      : filtrarPorCategoria(listaLivros, categoriaFiltrada);

    ExibirLivros(livrosFiltrados);

    if (categoriaFiltrada === 'disponivel') {
      const valorTotal = calcularValorTotalDisponiveis(livrosFiltrados);
      exibirValorTotal(valorTotal);
    }
  }

  botoesFiltros.forEach((btn) => btn.addEventListener('click', filtroCategoria));
};

export default FiltrarLivros;
