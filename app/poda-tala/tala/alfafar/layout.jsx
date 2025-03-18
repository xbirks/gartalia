import "../../../style.scss";
import Header from '../../../components/header.jsx';
import Footer from "../../../components/footer.jsx";

const municipio = "Alfafar";

export const metadata = {
  title: `Tala de árboles y palmeras en ${municipio} por expertos | GARTALIA`,
  description: `Tala segura y profesional de árboles y palmeras en ${municipio}. Servicio rápido y eficaz. ¡Presupuesto GRATIS!`,
  applicationName: 'GARTALIA',
  keywords: [
    `tala de árboles en ${municipio}`,
    `tala de palmeras en ${municipio}`,
    `servicio de tala en ${municipio}`,
    `expertos en tala en ${municipio}`,
    `tala profesional en ${municipio}`,
    `tala controlada en ${municipio}`,
    `tala urgente en ${municipio}`,
    `tala de árboles peligrosos en ${municipio}`,
    `retirada de árboles secos en ${municipio}`,
    `tala con grúas en ${municipio}`,
    `tala en altura en ${municipio}`,
    `especialistas en tala de palmeras en ${municipio}`,
    `gestión de permisos de tala en ${municipio}`,
    `tala de pinos en ${municipio}`,
    `tala de cipreses en ${municipio}`,
    `tala de algarrobos en ${municipio}`,
    `tala de olivos en ${municipio}`,
    `tala en parcelas privadas en ${municipio}`,
    `empresa especializada en tala en ${municipio}`,
    `presupuesto para tala en ${municipio}`,
    `tala segura en ${municipio}`,
    `tala preventiva en ${municipio}`,
    `tala rápida y económica en ${municipio}`
  ],
};

export default function SedaviLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
