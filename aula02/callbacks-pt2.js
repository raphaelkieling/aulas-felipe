/**
 * Usando callbacks como forEach
 */
const nomePessoas = ["raphael", "felipe", "fernanda"];

// Primeiro método (fácil)
// for (let i = 0; i < nomePessoas.length; i++) {
//   console.log(nomePessoas[i]);
// }

// Segundo método (médio)
// for (const nomeIndex in nomePessoas) {
//   console.log(nomePessoas[nomeIndex]);
// }

// Terceiro método (médio)
// for (const nome of nomePessoas) {
//   console.log(nome);
// }

// Quarto método (hard)
// nomePessoas.forEach(function (item) {
//   console.log(item);
// });

/**
 * Exemplo do aniversário.
 *
 * aoChegarEmCasa(aniversarioSurpresa)
 */

// function aoChegarEmCasa(callback) {
//   // Fingir que aqui o desenvolvedor pegou um sensor e está escutando quando o sensor for ativo
//   if (typeof callback === "function") {
//     const nomePadrao = "Diego";
//     callback(nomePadrao);
//   } else {
//     console.log("Me passou um argumento errado");
//   }
// }

// function darParabens(nome) {
//   console.log("Felizz aniversario: " + nome);
// }

// function alarmeDeAssalto(nomeDoAssaltante) {
//   console.log("O criminoso foi:" + nomeDoAssaltante);
// }

// aoChegarEmCasa(darParabens);
// aoChegarEmCasa(alarmeDeAssalto);
/**
 * Criando nosso proprio forEach simplificado
 */

function caminhaPeloArray(listagem, funcao) {
  for (const item of listagem) {
    funcao(item);
  }
}

caminhaPeloArray([1, 2, 3], function (itemAtual) {
  console.log(itemAtual);
});

con

/**
 * Começando com o projeto do cep
 */
