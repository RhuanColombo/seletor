const titulo = document.getElementById('titulo');
titulo.textContent = 'Novo Título';

const itensLista = document.querySelectorAll('#minha-lista li');
itensLista.forEach((item) => {
  item.style.color = 'red';
  item.style.fontSize = '20px';
});

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((p) => {
  p.classList.add('paragrafo-estilizado');
});

const botao = document.getElementById('meu-botao');
botao.textContent = 'Texto Alterado';
