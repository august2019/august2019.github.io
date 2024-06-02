const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  //S: 추가했음
  devServer: {
    client: {
      overlay: false
    }
  },
  //E: 추가했음

  //경로
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vuetify2/'
  : '/'
})
