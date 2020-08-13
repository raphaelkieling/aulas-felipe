/**
 * - Fazendo o riscar funcionar
 * - Fazendo o delete funcionar (filter)
 * - Fazendo o vazio funcionar
 * - Fazendo um loading pra carregar as listas
 * - Fazendo um callback pra voltar os itens depois de 3 segundos
 * - Usando localstorage pra salvar os itens
 * - Usando localstorage pra popular os itens ao abrir
 *
 * - Parando um pouco e ver sobre Promises.
 * - Mostrar sobre o json server
 */

const listagemEl = document.getElementById("listagem");

let listagemDeTarefas = [
  new Tarefa(1, "Fazer um relatório", "Trabalho", false),
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

  const novaTarefa = new Tarefa(null, valorDescricao, valorCategoria, false);

  listagemDeTarefas = [...listagemDeTarefas, novaTarefa];
  populaAsTarefasNoHtml();

  //Limpa descrição
  elementoTarefa.descricao.value = "";
}

elementoTarefa.botaoSalvar.addEventListener("click", aoApertarEmSalvar);

function riscarTarefaPelaDescricao(tarefaDescricao) {
  listagemDeTarefas = listagemDeTarefas.map((tarefa) => {
    if (tarefa.descricao === tarefaDescricao) {
      tarefa.feito = tarefa.feito ? false : true;
      return tarefa;
    } else {
      return tarefa;
    }
  });
}

function deletarTarefaPelaDescricao(tarefaDescricao) {
  listagemDeTarefas = listagemDeTarefas.filter((tarefa) => {
    if (tarefa.descricao === tarefaDescricao) {
      return false;
    } else {
      return true;
    }
  });
}

function elementoLiPelaTarefa(tarefa) {
  // Criando o LI
  const elementoLi = document.createElement("li");
  elementoLi.classList.add("list-group-item");

  // Criando a descricao
  const spanDescricao = document.createElement("span");
  spanDescricao.textContent = tarefa.descricao;
  spanDescricao.onclick = () => {
    riscarTarefaPelaDescricao(tarefa.descricao);
    populaAsTarefasNoHtml();
  };
  if (tarefa.feito) {
    spanDescricao.classList.add("riscado");
  }

  // Criar a tag de categoria
  const spanTagCategoria = document.createElement("span");
  spanTagCategoria.className = "badge badge-secondary";
  spanTagCategoria.textContent = tarefa.categoria;

  // Criar botão deletar
  const btnDeletar = document.createElement("button");
  btnDeletar.textContent = "Deletar";
  btnDeletar.onclick = () => {
    if(confirm("Você realmente quer deletar?")) {
      deletarTarefaPelaDescricao(tarefa.descricao)
      populaAsTarefasNoHtml();
    }
  };

  elementoLi.appendChild(spanDescricao);
  elementoLi.appendChild(spanTagCategoria);
  elementoLi.appendChild(btnDeletar);

  return elementoLi;
}

function populaAsTarefasNoHtml() {
  listagemEl.innerHTML = "";
  listagemDeTarefas.forEach(function (tarefa) {
    // Só o fato da gente estar MODIFICANDO o innerHTML ele já atualiza
    const novoLi = elementoLiPelaTarefa(tarefa);
    listagemEl.appendChild(novoLi);
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
