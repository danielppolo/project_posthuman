const path = require('path')

const alias = {
  src: path.join(__dirname, 'src'),
  pages: path.join(__dirname, 'src/pages'),
  components: path.join(__dirname, 'src/components'),
  layouts: path.join(__dirname, 'src/components/layouts'),
  hooks: path.join(__dirname, 'src/hooks'),
  actions: path.join(__dirname, 'src/actions'),
  reducers: path.join(__dirname, 'src/reducers'),
  'action-creators': path.join(__dirname, 'src/action-creators'),
  sagas: path.join(__dirname, 'src/sagas'),
  services: path.join(__dirname, 'src/services'),
  router: path.join(__dirname, 'src/router'),
  assets: path.join(__dirname, 'src/assets'),
  store: path.join(__dirname, 'src/store'),
  utils: path.join(__dirname, 'src/utils'),
}

module.exports = alias
