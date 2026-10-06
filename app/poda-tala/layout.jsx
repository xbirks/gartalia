import "../style.scss";

// Los metadatos de /poda-tala están en page.jsx: este layout también envuelve
// las páginas de poda y tala por municipio, que tienen los suyos.

export default function PodaTalaLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
