module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RivetReact',
      externals: {
        react: 'React'
      }
    }
  }
}
