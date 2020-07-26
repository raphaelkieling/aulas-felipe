/**
 * - Criar o design do site
 * - Começando a desenvolver
 *      - Fazer fixa em um array
 *      - Possibilidade de adicionar quando apertar no botão
 * - Parando um pouco para ver os métodos map, filter e reduce
 * - Voltando
 *      - Implementando excluir
 *      - Implementando edição
 * - Mostrar sobre o json server
 * - Parando um pouco e ver sobre Promises.
 */

const listagemEl = document.getElementById("listagem");

let listagemDeTarefas = [
  {
    id: 1,
    descricao: "Fazer um relatório",
    feito: false,
    categoria: "Trabalho",
  },
  {
    id: 2,
    descricao: "Passar na lotérica e pagar meu xbox",
    feito: true,
    categoria: "Contas",
  },
];

// Elementos para criar uma tarefa
const elementoTarefa = {
  descricao: document.getElementById("tarefa-descricao"),
  categoria: document.getElementById("tarefa-categoria"),
  botaoSalvar: document.getElementById("tarefa-salvar"),
};

// Criar a lógica de adicionar uma tarefa
function aoApertarEmSalvar() {
  const valorDescricao = elementoTarefa.descricao.value;
  const valorCategoria = elementoTarefa.categoria.value;

  const novaTarefa = {
    descricao: valorDescricao,
    categoria: valorCategoria,
    feito: false,
  };

  listagemDeTarefas = [...listagemDeTarefas, novaTarefa];
  populaAsTarefasNoHtml();

  //Limpa descrição
  elementoTarefa.descricao.value = "";
}

elementoTarefa.botaoSalvar.addEventListener("click", aoApertarEmSalvar);

function pegaClasseRiscadoSeTiverFeito(verdadeiro) {
  return verdadeiro ? "riscado" : "";
}

function elementoLiPelaTarefa(tarefa) {
  return `
        <li class="list-group-item ${pegaClasseRiscadoSeTiverFeito(
          tarefa.feito
        )}">
        ${tarefa.descricao} <span class="badge badge-secondary">
        ${tarefa.categoria}</span></h3>
        </li>
    `;
}

function populaAsTarefasNoHtml() {
  listagemEl.innerHTML = "";
  listagemDeTarefas.forEach(function (tarefa) {
    // Só o fato da gente estar MODIFICANDO o innerHTML ele já atualiza
    listagemEl.innerHTML += elementoLiPelaTarefa(tarefa);
  });
}

function deletarItem(idParaDeletar) {
  listagemDeTarefas = listagemDeTarefas.filter((item) => {
    return item.id !== idParaDeletar;
  });
}

function marcarItem(idParaMarcar) {
  listagemDeTarefas = listagemDeTarefas.map((item) => {
    if (item.id === idParaMarcar) {
      item.feito = true;
      return item;
    } else {
      return item;
    }
  });
}

populaAsTarefasNoHtml();
