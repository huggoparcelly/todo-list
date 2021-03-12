// capturar o texto do input e adicionar o texto do input ao item
const getList = document.querySelector('#lista-tarefas'); // capturar a lista ordenada

// adiciona e muda a classe do background
function changeClass(event) {
  const getClassBg = document.getElementsByTagName('li'); // capturar todos os elementos com a classe
  for (let c = 0; c < getClassBg.length; c += 1) { // passar por todos os elementos
    getClassBg[c].classList.remove('backgroundItens'); // remove a classe dos elementos que à contém
  }
  event.target.classList.add('backgroundItens'); // adiciona a classe ao elemento clicado
}

function taskCompleted(event) {
  event.target.classList.toggle('completed'); // adiciona e remove a classe ao elemento clicado
}

function addTask() {
  const getText = document.getElementById('texto-tarefa'); // captura o texto no input
  const createItem = document.createElement('li'); // criar o item
  getList.appendChild(createItem); // adiciona o item a lista
  createItem.innerHTML = getText.value; // item recebe o texto do input
  getText.value = ''; // apaga o conteudo do input
  createItem.addEventListener('click', changeClass); // adicionar um evento de clique, que muda o bg, no item criado
  createItem.addEventListener('dblclick', taskCompleted); // adiciona um evento de dblclick, que adiciona e remove o risco na atividade.
}

// adicionar um evento click ao botão
function btnClick() {
  const getBtn = document.querySelector('#criar-tarefa');
  getBtn.addEventListener('click', addTask);
}

function clearAll() {
  getList.innerHTML = ''; // captura as tarefas
}

function btnClearAll() {
  const btnClear = document.querySelector('#apaga-tudo'); // captura o botão
  btnClear.addEventListener('click', clearAll);
}

// captura o inner.HTML de quem ta finalizado
function clearFinish() {
  const taksFinish = document.querySelectorAll('.completed'); // captura o elemento que tem a class completed
  for (let i = 0; i < taksFinish.length; i += 1) {
    taksFinish[i].remove();
  }
}
// captura o botão e adiciona o evento
function btnClearFinish() {
  const btnRemoveFinish = document.getElementById('remover-finalizados');
  btnRemoveFinish.addEventListener('click', clearFinish);
}

// salvar tarefas
// localStorage.setItem("key", "value");
function salveData() {
  const getItens = document.getElementsByTagName('li'); // captura os itens pela tag
  for (let i = 0; i < getItens.length; i += 1) {
    localStorage.setItem([i], getItens[i].outerHTML); // retorna os itens dentro da ol
  }
}

function btnSalve() {
  const getBtnSalve = document.getElementById('salvar-tarefas');
  getBtnSalve.addEventListener('click', salveData);
}

// ler os dados
function getData() {
  const getItens = document.getElementsByTagName('li'); // captura os itens pela tag
  for (let i = 0; i < localStorage.length; i += 1) {
    const createItem = document.createElement('li'); // criar o item
    getList.appendChild(createItem); // adiciona o item a lista
    getItens[i].outerHTML = localStorage.getItem(i); // captura os itens salvos
    getItens[i].addEventListener('click', changeClass); // adicionar um evento de clique, que muda o bg, no item criado
    getItens[i].addEventListener('dblclick', taskCompleted); // adiciona um evento de dblclick, que adiciona e remove o risco na atividade.
  }
}

window.onload = function () {
  btnClick();
  btnClearAll();
  btnClearFinish();
  btnSalve();
  getData();
};
