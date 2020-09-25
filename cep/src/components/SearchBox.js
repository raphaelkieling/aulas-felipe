import React from "react";

function SearchBox(propriedades) {
  return (
    <div className="input-group mb-3 mt-2">
      <input
        value={propriedades.cep}
        onChange={propriedades.setCep}
        type="text"
        className="form-control"
        placeholder="Digite o cep para buscar"
      />

      <div className="input-group-append">
        <button
          className="btn btn-dark"
          type="button"
          onClick={function (evento) {
            propriedades.onClickBotao();
          }}
        >
          Verificar
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
