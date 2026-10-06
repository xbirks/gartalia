// Reseñas de Google para la web (portada y páginas de pueblo).
// Fuente: ficha de Google de Gartalia, descargada el 06/10/2026 (datos/resenas_2026-10-06.json del proyecto).
// Las citas son de la reseña original. Lo que se quita va marcado con «[…]» (también al principio o al final).
// Los «…» son puntos suspensivos del propio cliente. Solo se corrigen erratas de ortografía
// (tildes, mayúsculas, espacios, «parias» → «varias»), sin cambiar ni añadir palabras.
// NOTA hay que revisarla si cambia en la ficha. El total de opiniones se deja fijo en «+99»
// (decisión del usuario, 07/10/2026, con 99 en Google) para no tener que tocarlo con cada reseña nueva.

export const NOTA = '4,9';
export const TOTAL_OPINIONES = '+99';

export const RESENAS = [
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT21STVUwMXVVVWRxTlY5T1ZIUklWamwyYlRZM2FYYxAB',
    nombre: 'Alejandro',
    lugar: '',
    mes: 'julio de 2026',
    servicio: 'Tala difícil',
    texto:
      '[…] Después de venir varias empresas y comentarnos «que no se podía hacer»… muy grande y muy peligroso… esta empresa en un solo día taló el árbol. Destacar que lo dejaron todo perfecto (pese a la dificultad) y sobre todo muy preocupados por la seguridad de los operarios y la gente de alrededor… una maravilla.',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT2trNFZWaGZSeTB0ZUc0MGVtMTVNM0ppVm5WbFNYYxAB',
    nombre: 'Raquel',
    lugar: 'La Cañada',
    mes: 'julio de 2026',
    servicio: 'Tala de pino',
    texto:
      'No me esperaba esta eficacia, rapidez, perfección y que aún existiese gente tan trabajadora, responsable y profesional para talar este pino inmenso en La Cañada… Mis hijos «alucinaban» desde la segunda planta mientras los veían trabajar… Destacar todos los protocolos de seguridad que siguen ellos y hacia los demás. […]',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT21OQmFITmlOMk4zVFVGc2FGcE5PVTgxTjFWUFYxRRAB',
    nombre: 'Rosa',
    lugar: '',
    mes: 'septiembre de 2026',
    servicio: 'Tala de pino',
    texto:
      'Un trabajo excepcional, tala de un pino de unas dimensiones y una dificultad tremenda, por su ubicación y estado, que nos ha dejado maravillados. Muy satisfechos con el resultado final, ha quedado totalmente limpio.',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT25STUxVWmxha0p4ZFZaaVRHZG5Rbk5KVDBGRU1uYxAB',
    nombre: 'David',
    lugar: '',
    mes: 'junio de 2026',
    servicio: 'Pino en mal estado',
    texto:
      'He llamado a Carlos en urgencia porque tenía un pino de 70 años en muy mal estado. Ha venido a presupuestar súper rápido y explicarme cómo trabajan en Gartalia… ¡Pues ni un fallo! […] Y José es un máquina cortando en altura. […] Y para rematar me han dejado el chalet más limpio de como lo han encontrado. […]',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT2xaaU1sOUpSVWh6VVRSV1ptMVJjUzFtWm1KVk1WRRAB',
    nombre: 'Beatriz',
    lugar: '',
    mes: 'marzo de 2026',
    servicio: 'Urgencia',
    texto:
      'Grandes profesionales. Acudieron enseguida en una emergencia por un pino caído sobre un tejado y realizaron la tarea con eficiencia, rapidez y pulcritud. Carlos siempre atento, servicial y con un trato excelente. […]',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT2pJeFQyTjRiMjkzTkRsTU5rOTFkR3BsTTBOdWRuYxAB',
    nombre: 'Carmen',
    lugar: '',
    mes: 'junio de 2026',
    servicio: 'Palmera',
    texto:
      '[…] Nos han sacado un cocotero y de manera muy profesional, muy limpia y de raíz, que ha sido lo que más nos ha llamado la atención; además, súper rápido. […]',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT2pGRVZIYzBNemRLVW13MVNIaHpjSEk0TmtKVmNrRRAB',
    nombre: 'Marta',
    lugar: '',
    mes: 'septiembre de 2026',
    servicio: 'Limpieza de parcela',
    texto:
      'Contacté para un desbrozado de 3.000 m². En poco tiempo (3 días) lo terminó rápido con su cuadrilla y con un trabajo impecable. Carlos es muy buen profesional y resolutivo. […]',
  },
  {
    id: 'Ci9DQUlRQUNvZENodHljRjlvT2pWcVNrWnVNVkpLU1hoWU9HbEhSMFZuVkZRNWEzYxAB',
    nombre: 'Alberto',
    lugar: '',
    mes: 'enero de 2026',
    servicio: 'Procesionaria y ramas a 15 m',
    texto:
      'Excelentes profesionales, rápidos y formales. Vinieron enseguida a dar presupuesto y en 24 h estaban haciendo el trabajo. Han quitado más de 20 nidos de procesionaria, talado y troceado unas ramas que estaban a más de 15 metros de altura. Tienen seguro de R.C. para cualquier eventualidad que pudiera surgir. […]',
  },
];

// Devuelve las reseñas en el orden de los nombres pedidos (los nombres no se repiten en la lista).
export function resenasDe(...nombres) {
  return nombres.map((n) => RESENAS.find((r) => r.nombre === n)).filter(Boolean);
}
