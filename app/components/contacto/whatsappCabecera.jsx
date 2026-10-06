'use client';

import StandardButton from '../../buttons/standardButton';
import { MENSAJE_GENERAL, enlaceWhatsApp, mensajeFurgoneta } from '../../lib/whatsapp';
import { useDeLaFurgoneta } from './origen';

// Botón de WhatsApp de la cabecera, con el mismo mensaje que la barra fija del móvil.
// Va aparte porque la cabecera se genera en el servidor y aquí hay que saber, ya en el navegador, si la visita viene de la furgoneta.
export default function WhatsAppCabecera() {
  const furgoneta = useDeLaFurgoneta();
  return (
    <StandardButton
      link={enlaceWhatsApp(furgoneta ? mensajeFurgoneta() : MENSAJE_GENERAL)}
      title="WhatsApp"
      style="standardButton"
    />
  );
}
