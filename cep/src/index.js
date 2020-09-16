import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./pages/Home";

// Padrão : import QualquerCoisa from '...' => Pega o que estiver em export default
// Nomeada: import { Home, About } from '...' => Pega EXATAMENTE o nome do que está sendo exportado
// Nomeada e o Padrão: import { About }, QualquerCoisa from '...' => Pega o padrão e o nomeado

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
