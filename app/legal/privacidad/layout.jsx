import "../../style.scss";
import { metadataPrivacidad } from '../../lib/seo';

export const metadata = metadataPrivacidad;

export default function PrivacidadLayout({ children }) {
  return (
    <div className="master__gartalia">
      {children}
    </div>
  );
}
