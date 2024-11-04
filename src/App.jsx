import { useState } from "react";
import "./App.css";
import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";
import Form from "./Components/Form";
function App() {
  const [isSelected, setIsSelected] = useState({
    artista: null,
    status: false,
  });
  return (
    <>
      {isSelected.status ? <Form artista={isSelected.artista} /> : null}
      {espectaculos.map((espectaculo) => (
        <Espectaculo
          key={espectaculo.id}
          espectaculo={espectaculo}
          setIsSelected={setIsSelected}
        />
      ))}
    </>
  );
}

export default App;

//Componentes
//Props
//Estados
//Eventos
//Formularios
//Map
