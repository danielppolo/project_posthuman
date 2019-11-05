const path = require('path')

const alias = {
  src: path.resolve(__dirname, 'src'),
  pages: path.resolve(__dirname, 'src/pages'),
  components: path.resolve(__dirname, 'src/components'),
  common: path.resolve(__dirname, 'src/components/common'),
  layouts: path.resolve(__dirname, 'src/components/layouts'),
  hooks: path.resolve(__dirname, 'src/hooks'),
  actions: path.resolve(__dirname, 'src/actions'),
  reducers: path.resolve(__dirname, 'src/reducers'),
  'action-creators': path.resolve(__dirname, 'src/action-creators'),
  sagas: path.resolve(__dirname, 'src/sagas'),
  services: path.resolve(__dirname, 'src/services'),
  router: path.resolve(__dirname, 'src/router'),
  assets: path.resolve(__dirname, 'src/assets'),
  store: path.resolve(__dirname, 'src/store'),
  utils: path.resolve(__dirname, 'src/utils'),
  static: path.resolve(__dirname, 'src/static'),
}

module.exports = alias
