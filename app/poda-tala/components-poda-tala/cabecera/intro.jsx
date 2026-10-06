"use client";

import Intro from '../../../components/cabecera/intro';

// Portada de /poda-tala: la misma de la home, con su titular, su entradilla y su mensaje de WhatsApp.
// La presentación que iba debajo está ahora al principio de los servicios (grid/gridMaster).
function IntroPodaTala({ municipio }) {
  return (
    <Intro
      titulo={<><span className="intro__h1-high">Poda y tala de árboles</span> grandes y difíciles en {municipio}</>}
      entradilla="Pinos, palmeras y árboles grandes pegados a casas, piscinas o cables. Los podamos o los bajamos por partes, te preparamos el informe para el permiso de tala y lo dejamos todo limpio."
      mensaje={`Hola, quiero pedir presupuesto para podar o talar un árbol grande en ${municipio}.`}
    />
  );
}

export default IntroPodaTala;
