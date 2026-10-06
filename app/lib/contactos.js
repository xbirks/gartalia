// Utilidades para los formularios de contacto (pages/api).

// Limpia un campo del formulario para meterlo en el HTML del correo sin que
// nadie pueda colar código.
export function escapar(valor, max = 500) {
  return String(valor ?? '')
    .slice(0, max)
    .replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Versión en una línea para el asunto del correo.
export function enUnaLinea(valor, max = 120) {
  return String(valor ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

// Envía una copia del contacto a n8n si N8N_WEBHOOK_URL está configurada en Vercel.
// Nunca hace fallar el formulario: si n8n no responde, el correo se envía igual.
export async function avisarN8n(datos) {
  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) return;

  const controlador = new AbortController();
  const limite = setTimeout(() => controlador.abort(), 4000);
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...datos, recibido: new Date().toISOString() }),
      signal: controlador.signal,
    });
  } catch (error) {
    console.error('No se pudo enviar el contacto a n8n:', error.message);
  } finally {
    clearTimeout(limite);
  }
}
