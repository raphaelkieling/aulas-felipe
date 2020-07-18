/**
 * Variáveis
 * -- Var, let, const
 * -- Hoisting
 * -- Function é uma variável?
 */

const procuraCep = {
  ativo: true,
};
let cep = "";
let cepName = "";

if (procuraCep.ativo) {
  cep = "955555-0000";
  cepName = "Capão da canoa";
}

// -- Function é uma variável?
const pessoa = {
  nome: "Felipe",
};

const pegaNomeEmMaisculo = () => {
  console.log(pessoa.nome.toUpperCase());
};

pegaNomeEmMaisculo();
