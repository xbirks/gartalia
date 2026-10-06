// Datos de SEO de toda la web: títulos, descripciones, canonical y datos estructurados.
// Cambiar un texto aquí lo cambia en todas las páginas de ese tipo.

export const SITE_URL = 'https://www.gartalia.com';
export const MARCA = 'Gartalia';
export const ID_EMPRESA = `${SITE_URL}/#empresa`;
export const TELEFONO = '+34657170847';
export const FICHA_GOOGLE = 'https://www.google.com/maps?cid=16804389010768211644';

const IMAGEN_SOCIAL = {
  url: '/seo/meta-1200x630.jpg',
  width: 1200,
  height: 630,
  alt: 'Gartalia, poda y tala en altura en Valencia',
};

// Nombre correcto de cada pueblo o urbanización, por slug de la URL.
// tipo: 'City' para municipios, 'Place' para urbanizaciones y barrios.
export const MUNICIPIOS = {
  albal: { nombre: 'Albal', tipo: 'City' },
  alboraya: { nombre: 'Alboraya', tipo: 'City' },
  alfafar: { nombre: 'Alfafar', tipo: 'City' },
  alginet: { nombre: 'Alginet', tipo: 'City' },
  alzira: { nombre: 'Alzira', tipo: 'City' },
  benaguasil: { nombre: 'Benaguasil', tipo: 'City' },
  benifaio: { nombre: 'Benifaió', tipo: 'City' },
  betera: { nombre: 'Bétera', tipo: 'City' },
  burjassot: { nombre: 'Burjassot', tipo: 'City' },
  calicanto: { nombre: 'Calicanto', tipo: 'Place' },
  campoolivar: { nombre: 'Campolivar', tipo: 'Place' },
  canada: { nombre: 'La Cañada', tipo: 'Place' },
  casinos: { nombre: 'Casinos', tipo: 'City' },
  cheste: { nombre: 'Cheste', tipo: 'City' },
  chiva: { nombre: 'Chiva', tipo: 'City' },
  cullera: { nombre: 'Cullera', tipo: 'City' },
  eliana: { nombre: 'La Eliana', tipo: 'City' },
  gandia: { nombre: 'Gandia', tipo: 'City' },
  godella: { nombre: 'Godella', tipo: 'City' },
  liria: { nombre: 'Llíria', tipo: 'City' },
  manises: { nombre: 'Manises', tipo: 'City' },
  marines: { nombre: 'Marines', tipo: 'City' },
  mascamarena: { nombre: 'Mas Camarena', tipo: 'Place' },
  massarojos: { nombre: 'Massarrojos', tipo: 'Place' },
  mislata: { nombre: 'Mislata', tipo: 'City' },
  moncada: { nombre: 'Moncada', tipo: 'City' },
  montserrat: { nombre: 'Montserrat', tipo: 'City' },
  naquera: { nombre: 'Náquera', tipo: 'City' },
  olocau: { nombre: 'Olocau', tipo: 'City' },
  paterna: { nombre: 'Paterna', tipo: 'City' },
  picassent: { nombre: 'Picassent', tipo: 'City' },
  'pobla-de-vallbona': { nombre: 'La Pobla de Vallbona', tipo: 'City' },
  pucol: { nombre: 'Puçol', tipo: 'City' },
  ribarroja: { nombre: 'Riba-roja de Túria', tipo: 'City' },
  rocafort: { nombre: 'Rocafort', tipo: 'City' },
  santabarbara: { nombre: 'Santa Bárbara', tipo: 'Place' },
  sedavi: { nombre: 'Sedaví', tipo: 'City' },
  silla: { nombre: 'Silla', tipo: 'City' },
  'torre-en-conill': { nombre: 'Torre en Conill', tipo: 'Place' },
  torrent: { nombre: 'Torrent', tipo: 'City' },
  turis: { nombre: 'Turís', tipo: 'City' },
  valencia: { nombre: 'Valencia', tipo: 'City' },
  vilamarxant: { nombre: 'Vilamarxant', tipo: 'City' },
};

function municipio(slug) {
  const datos = MUNICIPIOS[slug];
  if (!datos) throw new Error(`Municipio sin datos de SEO: ${slug}`);
  return datos;
}

// Cierra la descripción con la llamada a la acción solo si cabe en lo que muestra Google.
function conCierre(descripcion) {
  const completa = `${descripcion} Presupuesto sin compromiso.`;
  return completa.length <= 158 ? completa : descripcion;
}

// Añade la marca al final solo si el título no queda demasiado largo para Google.
function conMarca(titulo) {
  const completo = `${titulo} | ${MARCA}`;
  return completo.length <= 62 ? completo : titulo;
}

export function metadataPagina({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: MARCA,
      locale: 'es_ES',
      type: 'website',
      images: [IMAGEN_SOCIAL],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [IMAGEN_SOCIAL.url],
    },
  };
}

// --- Páginas fijas ---

export const metadataHome = metadataPagina({
  title: 'Gartalia | Poda y tala en altura en Valencia',
  description:
    'Poda y tala en altura de pinos, palmeras y árboles grandes junto a casas en Valencia. Con seguro de responsabilidad civil y nos ocupamos del permiso.',
  path: '/',
});

export const metadataPodaTala = metadataPagina({
  title: 'Poda y tala de árboles en Valencia | Empresa de tala en altura',
  description:
    'Poda y tala de pinos, palmeras y árboles peligrosos en Valencia. Gestionamos el permiso del ayuntamiento y retiramos todos los restos.',
  path: '/poda-tala',
});

export const metadataPrivacidad = metadataPagina({
  title: 'Política de privacidad | Gartalia',
  description: 'Cómo trata Gartalia los datos que nos envías al pedir presupuesto o dejarnos tu teléfono.',
  path: '/legal/privacidad',
});

// --- Páginas por municipio ---

export function metadataMunicipio(slug) {
  const { nombre } = municipio(slug);
  return metadataPagina({
    title: conMarca(`Jardineros en ${nombre}: poda y tala en altura`),
    description: conCierre(`Jardineros en ${nombre} especializados en poda y tala en altura de pinos, palmeras y árboles grandes. También desbrozamos parcelas.`),
    path: `/municipios/${slug}`,
  });
}

export function metadataPoda(slug) {
  const { nombre } = municipio(slug);
  return metadataPagina({
    title: conMarca(`Poda de árboles y palmeras en ${nombre}`),
    description: conCierre(`Poda en altura de pinos, palmeras y árboles grandes en ${nombre}. Cortes limpios que no dañan el árbol y recogemos todos los restos.`),
    path: `/poda-tala/poda/${slug}`,
  });
}

export function metadataTala(slug) {
  const { nombre } = municipio(slug);
  return metadataPagina({
    title: conMarca(`Tala de árboles y pinos en ${nombre}`),
    description: conCierre(`Talamos pinos, palmeras y árboles peligrosos en ${nombre}, también junto a casas y tejados. Nos ocupamos del permiso y lo dejamos todo limpio.`),
    path: `/poda-tala/tala/${slug}`,
  });
}

// --- Datos estructurados (JSON-LD) ---

const SERVICIOS = [
  'Poda en altura',
  'Tala de árboles y pinos',
  'Poda y tala de palmeras',
  'Tala de árboles peligrosos junto a viviendas',
  'Destoconado',
  'Retirada de bolsones de procesionaria',
  'Gestión de permisos de tala',
  'Desbroce y limpieza de parcelas',
];

function lugar(slug) {
  const { nombre, tipo } = municipio(slug);
  return { '@type': tipo, name: nombre };
}

export function jsonLdEmpresa() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#web`,
        url: `${SITE_URL}/`,
        name: MARCA,
        inLanguage: 'es-ES',
        publisher: { '@id': ID_EMPRESA },
      },
      {
        '@type': 'LocalBusiness',
        '@id': ID_EMPRESA,
        name: MARCA,
        description:
          'Empresa de Valencia especializada en poda y tala en altura de pinos, palmeras y árboles grandes, y en desbroce de parcelas.',
        url: `${SITE_URL}/`,
        telephone: TELEFONO,
        image: `${SITE_URL}${IMAGEN_SOCIAL.url}`,
        logo: `${SITE_URL}/seo/favicon_500x500.png`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: "Av. de l'Equador, 103",
          addressLocality: 'València',
          addressRegion: 'Valencia',
          postalCode: '46025',
          addressCountry: 'ES',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 39.4966513, longitude: -0.3937826 },
        hasMap: FICHA_GOOGLE,
        sameAs: [FICHA_GOOGLE],
        founder: { '@type': 'Person', name: 'Carlos Correa' },
        areaServed: Object.keys(MUNICIPIOS)
          .filter((slug) => MUNICIPIOS[slug].tipo === 'City')
          .map(lugar),
        knowsAbout: SERVICIOS,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios de Gartalia',
          itemListElement: SERVICIOS.map((nombre) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: nombre },
          })),
        },
      },
    ],
  };
}

function migas(...pasos) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: pasos.map(([nombre, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: nombre,
      item: `${SITE_URL}${path}`,
    })),
  };
}

function servicio({ nombre, tipo, area, path }) {
  return {
    '@type': 'Service',
    name: nombre,
    serviceType: tipo,
    provider: { '@id': ID_EMPRESA },
    areaServed: area,
    url: `${SITE_URL}${path}`,
  };
}

export function jsonLdPodaTala() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      servicio({
        nombre: 'Poda y tala de árboles en Valencia',
        tipo: 'Poda y tala en altura',
        area: lugar('valencia'),
        path: '/poda-tala',
      }),
      migas(['Inicio', '/'], ['Poda y tala', '/poda-tala']),
    ],
  };
}

export function jsonLdMunicipio(slug) {
  const { nombre } = municipio(slug);
  const path = `/municipios/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      servicio({ nombre: `Poda y tala en altura en ${nombre}`, tipo: 'Poda y tala en altura', area: lugar(slug), path }),
      migas(['Inicio', '/'], [`Jardineros en ${nombre}`, path]),
    ],
  };
}

export function jsonLdPoda(slug) {
  const { nombre } = municipio(slug);
  const path = `/poda-tala/poda/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      servicio({ nombre: `Poda de árboles y palmeras en ${nombre}`, tipo: 'Poda de árboles', area: lugar(slug), path }),
      migas(['Inicio', '/'], ['Poda y tala', '/poda-tala'], [`Poda en ${nombre}`, path]),
    ],
  };
}

export function jsonLdTala(slug) {
  const { nombre } = municipio(slug);
  const path = `/poda-tala/tala/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      servicio({ nombre: `Tala de árboles y pinos en ${nombre}`, tipo: 'Tala de árboles', area: lugar(slug), path }),
      migas(['Inicio', '/'], ['Poda y tala', '/poda-tala'], [`Tala en ${nombre}`, path]),
    ],
  };
}
