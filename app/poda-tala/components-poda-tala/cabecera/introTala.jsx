"use client";

import Intro from '../../../components/cabecera/intro';

// Portada de la tala por pueblo: la misma de la home, con su titular, su entradilla y su mensaje de WhatsApp.
// La presentación que iba debajo está ahora al principio de los servicios (grid/gridMasterTala).
function IntroTala({ municipio }) {
  return (
    <Intro
      titulo={<><span className="intro__h1-high">Tala de árboles y pinos</span> en {municipio}, también pegados a la casa</>}
      entradilla="Pinos y árboles grandes pegados a la casa, a la piscina o a la valla del vecino. Si no hay sitio para tumbarlos, los desmontamos por partes desde arriba y lo dejamos todo limpio."
      mensaje={`Hola, quiero pedir presupuesto para talar un pino o un árbol grande en ${municipio}.`}
      servicio={`tala de árboles y pinos en ${municipio}`}
    />
  );
}

export default IntroTala;
