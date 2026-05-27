export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://gartalia.com/sitemap.xml',
    host: 'https://gartalia.com',
  };
}
