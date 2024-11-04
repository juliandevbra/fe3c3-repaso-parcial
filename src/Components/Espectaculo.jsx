import React from "react";

const Espectaculo = ({ espectaculo, setIsSelected }) => {
  //   console.log(espectaculo);
  return (
    <div>
      <img src={espectaculo.img} alt="" />
      <h3>{espectaculo.artista}</h3>
      <h4>{espectaculo.fecha}</h4>
      <h2>${espectaculo.precio}</h2>
      <button
        onClick={() => setIsSelected({ artista: espectaculo, status: true })}
      >
        Quiero ir!
      </button>
    </div>
  );
};

export default Espectaculo;
