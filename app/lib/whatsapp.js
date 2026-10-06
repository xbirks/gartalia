// Enlaces de WhatsApp con el mensaje ya escrito: cada botón lleva el suyo, así Carlos sabe qué necesita el cliente.
// Va en un archivo aparte (no en components/contacto) para poder usarlo también en la cabecera, que se genera en el servidor.
export const MENSAJE_GENERAL = 'Hola, quiero pedir presupuesto para un árbol.';
export const enlaceWhatsApp = (mensaje) => `https://wa.me/34657170847?text=${encodeURIComponent(mensaje)}`;
export const WHATSAPP_WEB = enlaceWhatsApp(MENSAJE_GENERAL);

// Para quien llega por el QR de la furgoneta (components/contacto/origen.js): el texto lo eligió el usuario.
export const SERVICIO_GENERAL = 'poda y tala en altura';
export const mensajeFurgoneta = (servicio = SERVICIO_GENERAL) =>
  `Hola, he visto vuestra furgoneta, estoy interesado en los servicios de ${servicio}.`;
// Pasa el nombre de un servicio («Tala de pinos en Bétera») a minúscula para meterlo en la frase
export const enMinuscula = (texto) => texto.trim().charAt(0).toLowerCase() + texto.trim().slice(1);
