/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // Direcciones antiguas o mal escritas que han circulado (sitemap y enlaces internos)
  async redirects() {
    return [
      { source: '/municipios/torreconill', destination: '/municipios/torre-en-conill', permanent: true },
      { source: '/municipios/massarrojos', destination: '/municipios/massarojos', permanent: true },
      { source: '/poda-tala/poda/massarrojos', destination: '/poda-tala/poda/massarojos', permanent: true },
      { source: '/poda-tala/tala/massarrojos', destination: '/poda-tala/tala/massarojos', permanent: true },
      // QR del vinilo de la furgoneta (lleva grabado gartalia.com/furgo): va a la home marcado como «viene de la furgoneta»,
      // para contarlo en Analytics y para que los WhatsApp lo digan (components/contacto/origen.js).
      // Temporal a propósito: así se puede cambiar el destino sin reimprimir el vinilo.
      { source: '/furgo', destination: '/?utm_source=furgoneta&utm_medium=qr&utm_campaign=vinilo', permanent: false },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
