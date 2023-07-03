const apiEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let listaLivros = [];
const livrosContainer = document.querySelector('#livros');

function exibirLivros(livros) {
  livros.forEach((livro) => {
    livrosContainer.innerHTML += `
    <div class="livro">
      <img
        class="livro__imagens"
        src="${livro.imagem}"
        alt="${livro.alt}"
      />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `;
  });
}

async function getLivros() {
  const res = await fetch(apiEndpoint);
  const data = await res.json();
  listaLivros = data;
  console.table(listaLivros);
  exibirLivros(listaLivros);
}

getLivros();
