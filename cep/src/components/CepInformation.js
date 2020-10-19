import React from "react";

function CepInformation({ localidade, uf }) {
  return (
    <div className="card mt-3">
      <div className="card-header">Informações do cep</div>
      <div className="card-body">
        <strong>Localidade:</strong> {localidade} <br />
        <strong>UF:</strong> {uf}
      </div>
    </div>
  );
}

export default CepInformation;