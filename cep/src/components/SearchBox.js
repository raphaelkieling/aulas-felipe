import React, { useState } from "react";

function SearchBox(propriedades) {
  const [cepValue, setCepValue] = useState("123231231");

  return (
    <div className="input-group mb-3 mt-2">
      <input
        value={cepValue}
        onChange={(evento) => setCepValue(evento.target.value)}
        type="text"
        className="form-control"
        placeholder="Digite o cep para buscar"
      />

      <div className="input-group-append">
        <button
          className="btn btn-dark"
          type="button"
          onClick={function () {
            propriedades.onClickBotao(cepValue);
          }}
        >
          Verificar
        </button>
      </div>
    </div>
  );
}

export default SearchBox;