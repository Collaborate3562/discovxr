export default {
  seo: false,
  strategy: 'prefix',
  baseURL: process.env.APP_URL,
  locales: [
    {
      code: 'en',
      file: 'en-US.json',
      name: 'English',
      iso: 'en-US',
    },
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'locales/',
}
