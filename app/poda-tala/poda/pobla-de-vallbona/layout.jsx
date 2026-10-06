import "../../../style.scss";
import JsonLd from '../../../components/seo/jsonLd';
import { metadataPoda, jsonLdPoda } from '../../../lib/seo';

const slug = 'pobla-de-vallbona';

export const metadata = metadataPoda(slug);

export default function PodaMunicipioLayout({ children }) {
  return (
    <div className="master__gartalia">
      <JsonLd data={jsonLdPoda(slug)} />
      {children}
    </div>
  );
}
