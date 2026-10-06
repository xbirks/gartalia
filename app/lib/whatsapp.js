// Enlaces de WhatsApp con el mensaje ya escrito: cada botón lleva el suyo, así Carlos sabe qué necesita el cliente.
// Va en un archivo aparte (no en components/contacto) para poder usarlo también en la cabecera, que se genera en el servidor.
export const MENSAJE_GENERAL = 'Hola, quiero pedir presupuesto para un árbol.';
export const enlaceWhatsApp = (mensaje) => `https://wa.me/34657170847?text=${encodeURIComponent(mensaje)}`;
export const WHATSAPP_WEB = enlaceWhatsApp(MENSAJE_GENERAL);
