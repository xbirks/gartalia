"use client";

import Intro from '../../../components/cabecera/intro';

// Portada de la poda por pueblo: la misma de la home, con su titular, su entradilla, sus ✓ y su mensaje de WhatsApp.
// La presentación que iba debajo está ahora al principio de los servicios (grid/gridMasterPoda).
const GARANTIAS_PODA = ['Te explicamos cada paso', 'Seguro de responsabilidad civil', 'Nos llevamos todos los restos'];

function IntroPoda({ municipio }) {
  return (
    <Intro
      titulo={<><span className="intro__h1-high">Poda en altura</span> en {municipio}: pinos, palmeras y árboles grandes</>}
      entradilla="Pinos que vuelan sobre el tejado o la piscina, ramas secas que pueden caer y palmeras de cualquier altura. Subimos a la copa y bajamos cada rama de forma controlada, sin dañar nada de lo que hay debajo."
      garantias={GARANTIAS_PODA}
      mensaje={`Hola, quiero pedir presupuesto para podar un árbol alto en ${municipio}.`}
    />
  );
}

export default IntroPoda;
