import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from './lib/seo';

// Sitemap generado en cada build a partir de las páginas que existen de verdad,
// para que nunca incluya direcciones que den error.

function subpaginas(carpeta) {
  const dir = path.join(process.cwd(), 'app', carpeta);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(dir, d.name, 'page.jsx')))
    .map((d) => `/${carpeta}/${d.name}`)
    .sort();
}

export default function sitemap() {
  const rutas = [
    { path: '/', priority: 1 },
    { path: '/poda-tala', priority: 0.9 },
    ...subpaginas('poda-tala/tala').map((p) => ({ path: p, priority: 0.7 })),
    ...subpaginas('poda-tala/poda').map((p) => ({ path: p, priority: 0.7 })),
    ...subpaginas('municipios').map((p) => ({ path: p, priority: 0.5 })),
  ];

  return rutas.map(({ path: p, priority }) => ({
    url: `${SITE_URL}${p === '/' ? '/' : p}`,
    priority,
  }));
}
