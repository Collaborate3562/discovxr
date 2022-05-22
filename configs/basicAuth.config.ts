export default {
  name: process.env.BASIC_AUTH_LOGIN,
  pass: process.env.BASIC_AUTH_PASSWORD,
  enabled: process.env.BASIC_ENABLED === 'true',
}
