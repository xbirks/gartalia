import "../../style.scss";
import JsonLd from '../../components/seo/jsonLd';
import { metadataMunicipio, jsonLdMunicipio } from '../../lib/seo';

const slug = 'cullera';

export const metadata = metadataMunicipio(slug);

export default function MunicipioLayout({ children }) {
  return (
    <div className="master__gartalia">
      <JsonLd data={jsonLdMunicipio(slug)} />
      {children}
    </div>
  );
}
