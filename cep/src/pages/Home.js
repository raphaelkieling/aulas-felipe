import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";

export function Home() {
  /**
   * 1 - Criar o useState
   * 2 - Colocar o valor no value do input
   * 3 - Criar uma função chamada changeValorCep que modifica o valor baseado no evento que está vindo
   */

  // Aqui nós definimos o valor
  const [cepValue, setCepValue] = useState("");
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")

  function changeCep(evento) {
    setCepValue(evento.target.value);
  }

  function getCepInfoByCepNumber(cepNumber) {
    console.log("Fazendo consulta no serviço de CEP com o cep: " + cepNumber);

    fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
      .then(response => response.json())
      .then(({ localidade, uf }) => {
        setLocalidade(localidade)
        setUf(uf)
      })
  }

  // Ao criar o componente
  useEffect(()=> {
    getCepInfoByCepNumber("95555000")
  })

  return (
    <div>
      <Header>Minha App</Header>

      <div className="container mt-3">
        Cep que estou digitando: {cepValue}
        <div className="input-group mb-3 mt-2">
          <input
            value={cepValue}
            onChange={changeCep}
            type="text"
            className="form-control"
            placeholder="Digite o cep para buscar"
          />

          <div className="input-group-append">
            <button
              className="btn btn-dark"
              type="button"
              onClick={function(evento){
                getCepInfoByCepNumber(cepValue)
              }}
            >
              Verificar
            </button>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">Informações do cep</div>
          <div className="card-body">
            <strong>Localidade:</strong> {localidade}  <br />
            <strong>UF:</strong>  {uf}
          </div>
        </div>
      </div>
    </div>
  );
}
