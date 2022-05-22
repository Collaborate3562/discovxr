export default {
  extractCSS: true,
  loaders: {
    vue: {
      // eslint-disable-next-line global-require
      compiler: require('vue-template-babel-compiler'),
    },
  },
  extend(config: any) {
    config.node = {
      fs: 'empty',
    }
  },
}
