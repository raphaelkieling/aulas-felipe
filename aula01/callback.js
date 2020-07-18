/**
 * Callbacks e callback hell
 * -- Arrow functions
 * -- Funções anônimas
 * -- Se funções são variáveis...
 * -- E se eu passar uma dentro de outra, dentro de outra?
 */

// function pegaNomeDoBancoDeDados(callbackNome) {
//   callbackNome("Diego");
// }

// pegaNomeDoBancoDeDados(function (nome) {
//   console.log("Peguei do banco de dados o nome: " + nome);
// });

// fs.readFile("./legendas-filme.txt", function (erro, buffer) {
//   if (!erro) console.log(String(buffer));
// });

const leitor = {
  lerArquivo: function (pathDoArquivo, cachorroAzul) {
    // Finge que estou lendo o arquivo de verdade
    const conteudo = fs.readFileSync(pathDoArquivo);
    setTimeout(function () {
      cachorroAzul(null, String(conteudo));
    }, 5000);
  },
};

function mostraOArquivoQueFoiLido(erroQueAconteceu, conteudo) {
  console.log(erroQueAconteceu);
  console.log(conteudo);
}

leitor.lerArquivo("./legendas-filme.txt", mostraOArquivoQueFoiLido);
console.log("Esta acontecendo durante a leitura do arquivo");
