// pages/_app.js

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Utiliza el layout definido por la página, si está disponible
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
