import ExibirLivros from './exibirLivros';
import AplicarDesconto from './aplicarDesconto';
import FiltrarLivros from './filtrarLivros';
import OrdenarLivrosPreco from './ordenarPreco';

const apiEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let listaLivros = [];

async function getLivros() {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  listaLivros = data;
  const listaLivrosDescontados = AplicarDesconto(listaLivros);

  const livrosExibidos = listaLivrosDescontados;
  ExibirLivros(livrosExibidos);
  FiltrarLivros(livrosExibidos);
  OrdenarLivrosPreco(livrosExibidos);
}

getLivros();
