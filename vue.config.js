const data = require('./data.json')
const goods = data.goods
const seller = data.seller

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/goods', function(req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/seller', function(req,res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
    }
  }
}
