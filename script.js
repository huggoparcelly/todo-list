// capturar o texto do input e adicionar o texto do input ao item
const getList = document.querySelector('#lista-tarefas'); // capturar a lista ordenada

// adiciona a classe do background
function addClassBg(event) {
  event.target.classList.add('backgroundItens');
}

function addTask() {
  const getText = document.getElementById('texto-tarefa'); // captura o texto no input
  const createItem = document.createElement('li'); // criar o item
  getList.appendChild(createItem); // adiciona o item a lista
  createItem.innerHTML = getText.value; // item recebe o texto do input
  getText.value = ''; // apaga o conteudo do input
  createItem.addEventListener('click', addClassBg); // adicionar um evento de clique, que muda o bg, no item criado
}

// adicionar um evento click ao botão
function btnClick() {
  const getBtn = document.querySelector('#criar-tarefa');
  getBtn.addEventListener('click', addTask);
}

window.onload = function () {
  btnClick();
};
