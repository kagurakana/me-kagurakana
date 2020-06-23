module.exports = {
  proxy: {
    // with options
    '/api': {
      target: 'https://www.kagurakana.xyz',
      changeOrigin: true,
      // rewrite: path => path.replace(/^\/api/, '')
    }
  }
}