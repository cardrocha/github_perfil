import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

function App() {
  const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true);

  const [nomeUsuario, setNomeUsuario] = useState('');
  // const nome = 'Ricardo Rocha';

  // function retornaNome() {
  //   return nome;
  // }

  // const pessoa = {
  //   nome: 'Victor'
  // }

  // let estaDeDia = true;

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setformularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
      {/* <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom Dia' : 'Boa tarde'}
      {estaDeDia && 'Bom Dia'} */}
    </>
  )
}

export default App
