import React from "react";

const Card = ({ nombre, artista }) => {
  //   console.log(artista);
  return (
    <div>
      <h3>Gracias, {nombre}!</h3>
      <h3>
        En tu casilla de email te enviamos la entrada para {artista.artista}
      </h3>
    </div>
  );
};

export default Card;
