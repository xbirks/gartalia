import "./style.scss";
import Header from './components/header.jsx';
import Footer from "./components/footer.jsx";
import JsonLd from './components/seo/jsonLd';
import { SITE_URL, MARCA, IMAGEN_SOCIAL, jsonLdEmpresa } from './lib/seo';


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Gartalia | Poda y tala en altura en Valencia',
  description: 'Poda y tala en altura de pinos, palmeras y árboles grandes en Valencia y el Camp de Túria. También desbrozamos parcelas.',
  applicationName: MARCA,
  authors: [{ name: MARCA, url: SITE_URL }],
  creator: MARCA,
  publisher: MARCA,
  robots: { index: true, follow: true },
  // Iconos: app/favicon.ico, app/icon.png y app/apple-icon.png (Next.js los enlaza solo)
  openGraph: {
    siteName: MARCA,
    locale: 'es_ES',
    type: 'website',
    images: [IMAGEN_SOCIAL],
  },
}

export const viewport = {
  themeColor: '#6BDB8A',
}


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/usg7enf.css"></link>

        {/* Google Tag Manager Script */}
          <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WGNGCX77');`,
          }}
        />

        <JsonLd data={jsonLdEmpresa()} />
      </head>
      <body>

        {/* Google Tag Manager (noscript) */}
                <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGNGCX77"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}




        <div className="master__gartalia">
        <Header />
          {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
