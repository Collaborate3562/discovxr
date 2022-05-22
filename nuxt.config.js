import {
  axiosConfig,
  basicAuthConfig,
  buildConfig,
  buildModulesConfig,
  cssConfig,
  headConfig,
  i18nConfig,
  modulesConfig,
  pluginsConfig,
  proxyConfig,
  pwaConfig,
  vuetifyConfig,
} from './configs'

const env = require('dotenv').config()

export default {
  env: env.parsed,
  nuxt: {
    host: process.env.HOST,
    port: process.env.PORT,
  },
  head: headConfig,
  css: cssConfig,
  plugins: pluginsConfig,
  components: true,
  proxy: proxyConfig,
  axios: axiosConfig,
  buildModules: buildModulesConfig,
  modules: modulesConfig,
  pwa: pwaConfig,
  vuetify: vuetifyConfig,
  i18n: i18nConfig,
  basic: basicAuthConfig,
  build: buildConfig,
}
