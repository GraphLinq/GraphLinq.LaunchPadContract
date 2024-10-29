const path = require('path')
const { defineConfig } = require('vite')


module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'fundraiserlib',
      fileName: (format) => `fundraiserlib.${format}.js`
    },
    rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['ethers', '@ethersproject/providers'],
        output: {
          dir: "web3library/dist",
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            'ethers': 'ethers',
            '@ethersproject/providers': '@ethersproject/providers'
          }
        }
    }
  }
});