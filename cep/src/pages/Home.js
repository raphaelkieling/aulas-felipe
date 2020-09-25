import React, { useState } from "react";
import CepInformation from "../components/CepInformation";
import Container from "../components/Container";
import { Header } from "../components/Header";
import Loading from "../components/Loading";
import SearchBox from "../components/SearchBox";

export function Home() {
  /**
   * 1 - Criar o useState
   * 2 - Colocar o valor no value do input
   * 3 - Criar uma função chamada changeValorCep que modifica o valor baseado no evento que está vindo
   */

  // Aqui nós definimos o valor
  const [cepValue, setCepValue] = useState("123231231");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);

  function changeCep(evento) {
    setCepValue(evento.target.value);
  }

  function getCepInfoByCepNumber(cepNumber) {
    console.log("Fazendo consulta no serviço de CEP com o cep: " + cepNumber);

    setLoading(true);

    fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
      .then((response) => response.json())
      .then(({ localidade, uf }) => {
        setLocalidade(localidade);
        setUf(uf);

        setLoading(false);
      });
  }

  return (
    <div>
      <Header>Minha App</Header>

      <Container>
        <SearchBox
          cep={cepValue}
          setCep={setCepValue}
          onClickBotao={() => {
            getCepInfoByCepNumber(cepValue);
          }}
        />

        {loading ? (
          <Loading />
        ) : (
          <CepInformation localidade={localidade} uf={uf} />
        )}
      </Container>
    </div>
  );
}
