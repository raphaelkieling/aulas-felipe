# Aulas felipe

Esse repositório foi criado para as aulas com o felipe.

### Aula 01 `/aula01`

#### Desafio inicial

- Criar um repositório
- Dar os comandos iniciais do git em uma pasta do computador
  - `git init`
  - `git add (. ou -A)`
  - `git commit -m "..."`
  - Na primeira vez tu tem que dar `git add remote caneca <<link do repositorio>>`
  - `git push caneca master`

#### Desafio de treino

1 - Criar um função responsável por somar dois número e retonar o resultado em um callback, ela deve se parecer com:

```js
somar(1, 2, function(resultado){
	console.log("O resultado foi: "+ resultado)
})
```

2 - Criar um objeto com uma função que recebe uma lista e um callback, devendo imprimir cada um dos itens da lista:

```js
imprimirArray(['usb','jarra','caneca'], function(item){
	console.log(item)
})
```

Ou seja vai imprimir uma de cada vez, `usb`, `jarra` e `caneca`

> Dica: https://stackoverflow.com/questions/5602427/javascript-for-loop-callback Como usar callbacks com loops


### Aula04 `/aula04``

#### Desafio

Todos exercícios são utilizando esse array: https://jsonplaceholder.typicode.com/todos

1 - Usar `map` para criar uma lista apenas com os `title`
2 - Usar o `filter` para criar uma lista apenas com as tarefas completas
3 - Usar `filter` para pegar apenas as tarefas completas e por fim usar `map` para retornar apenas os `title`
4 - Usar o `reduce` para somar quantas tarefas existem
5 - Usar o `reduce` para somar quantas tarefas COMPLETAS existem

#### Desafio Final

Criar um tela simples em html (não precisa de bootstrap pra isto) onde vai ter uma listagem. Pode ser algo assim:
```html
<ul>
  <li>Felipe</li>
  <li>Cacto</li>
  <li>Caneca</li>
<ul>
```

Mas devem ser dinâmico ou seja esses dados como Felipe, Cacto e Caneca devem estar em um array no `index.js` e deve ser colocado automaticamente através do `innerHTML`