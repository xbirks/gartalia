import "../../../style.scss";
import JsonLd from '../../../components/seo/jsonLd';
import { metadataTala, jsonLdTala } from '../../../lib/seo';

const slug = 'vilamarxant';

export const metadata = metadataTala(slug);

export default function TalaMunicipioLayout({ children }) {
  return (
    <div className="master__gartalia">
      <JsonLd data={jsonLdTala(slug)} />
      {children}
    </div>
  );
}
