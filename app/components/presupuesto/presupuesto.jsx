"use client";

import ContactForm from '../../contactForm';
import '../cabecera/intro.scss';

// Formulario para quien prefiere que le llamemos antes que llamar o escribir por WhatsApp.
// Va después de «Quién está detrás»; los botones «Presupuesto» de la página llevan aquí (#presupuesto).
// El hueco de abajo lo separa del bloque verde de la zona de trabajo, que en la home va justo después.
function Presupuesto() {
  return (
    <div id="presupuesto" style={{ paddingBottom: '4vh' }}>
      <ContactForm
        titulo={<>¿Prefieres <br /> que te llamemos?</>}
        texto="Cuéntanos qué árbol es y súbenos unas fotos."
      />
    </div>
  );
}

export default Presupuesto;
