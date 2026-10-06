import './components/cabecera/intro.scss';
import BotonesContacto from './components/contacto/botonesContacto';
import StandardButton from './buttons/standardButton';

// Página de error 404 en español (antes salía la de Next.js, en inglés). Usa la portada y los botones de la web.
export const metadata = {
  title: 'Página no encontrada | Gartalia',
  robots: { index: false, follow: true },
};

export default function NoEncontrada() {
  return (
    <div className="Gartalia">
      <div className="master">
        <div className="intro__master">
          <h1><span className="intro__h1-high">Esta página</span> no existe</h1>
          <p className="intro__entradilla">
            Puede que el enlace esté mal escrito o que la página ya no exista. Si tienes un árbol que te preocupa, escríbenos o llámanos y te ayudamos.
          </p>

          <BotonesContacto ubicacion="404" />

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', margin: '32px 0 8vh 0' }}>
            <StandardButton link="/" title="Ir a la página principal" style="emptyStandardButton" />
            <StandardButton link="/poda-tala" title="Poda y tala en altura" style="emptyStandardButton" />
          </div>
        </div>
      </div>
    </div>
  );
}
