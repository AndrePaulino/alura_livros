import ExibirLivros from './exibirLivros';

const apiEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let listaLivros = [];

async function getLivros() {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  listaLivros = data;
  ExibirLivros(listaLivros);
}

getLivros();
