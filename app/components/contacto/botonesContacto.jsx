'use client';

import { TELEFONO } from '../../lib/seo';
import { MENSAJE_GENERAL, enlaceWhatsApp, WHATSAPP_WEB } from '../../lib/whatsapp';
import './botonesContacto.scss';

// Botones de contacto de la web (la página del QR tiene los suyos, con el mensaje de la furgoneta).

export function marcar(evento, ubicacion) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: evento, ubicacion, pagina: typeof window !== 'undefined' ? window.location.pathname : '' });
  } catch (e) {
    // Sin Tag Manager el enlace funciona igual.
  }
}

export function IconoWhatsApp() {
  return (
    <svg className="contacto__icono" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.8a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.9 2c0 1.2.9 2.4 1 2.5.1.2 1.7 2.7 4.2 3.8 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.4Z" />
    </svg>
  );
}

export function IconoTelefono() {
  return (
    <svg className="contacto__icono" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

// Dos botones grandes: WhatsApp y llamar. variante: 'claro' (sobre fondo oscuro) o 'normal'.
// mensaje: el texto de WhatsApp ya escrito; las páginas de poda y tala pasan el suyo.
export default function BotonesContacto({ ubicacion, variante = 'normal', mensaje = MENSAJE_GENERAL }) {
  return (
    <div className={`contacto__botones contacto__botones--${variante}`}>
      <a className="contacto__boton contacto__boton--whatsapp" href={enlaceWhatsApp(mensaje)} onClick={() => marcar('web_whatsapp', ubicacion)}>
        <IconoWhatsApp />
        <span>Escríbenos por WhatsApp</span>
      </a>
      <a className="contacto__boton contacto__boton--llamar" href={`tel:${TELEFONO}`} onClick={() => marcar('web_llamada', ubicacion)}>
        <IconoTelefono />
        <span>Llamar al 657 170 847</span>
      </a>
    </div>
  );
}

// Barra fija abajo en el móvil, para tener siempre a mano llamar o escribir.
export function BarraContacto() {
  return (
    <div className="contacto__barra" role="region" aria-label="Contacto rápido">
      <a className="contacto__barra-boton contacto__barra-boton--llamar" href={`tel:${TELEFONO}`} onClick={() => marcar('web_llamada', 'barra-fija')}>
        <IconoTelefono />
        <span>Llamar</span>
      </a>
      <a className="contacto__barra-boton contacto__barra-boton--whatsapp" href={WHATSAPP_WEB} onClick={() => marcar('web_whatsapp', 'barra-fija')}>
        <IconoWhatsApp />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
