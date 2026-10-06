'use client';

import { useEffect, useState } from 'react';

// Quien escanea el QR de la furgoneta llega a la home con ?utm_source=furgoneta (redirección de /furgo en next.config.mjs).
// Se recuerda durante la visita, también al pasar a otras páginas, para que todos los WhatsApp digan «he visto vuestra furgoneta».
const CLAVE = 'gartalia_origen';

export function deLaFurgoneta() {
  let enLaDireccion = false;
  try {
    enLaDireccion = new URLSearchParams(window.location.search).get('utm_source') === 'furgoneta';
    if (enLaDireccion) sessionStorage.setItem(CLAVE, 'furgoneta');
    return enLaDireccion || sessionStorage.getItem(CLAVE) === 'furgoneta';
  } catch (e) {
    // Sin almacenamiento (modo privado, etc.): solo cuenta la dirección
    return enLaDireccion;
  }
}

// En el servidor la página sale con los mensajes de siempre; ya en el navegador se cambian si la visita viene de la furgoneta.
export function useDeLaFurgoneta() {
  const [furgoneta, setFurgoneta] = useState(false);
  useEffect(() => {
    setFurgoneta(deLaFurgoneta());
  }, []);
  return furgoneta;
}
