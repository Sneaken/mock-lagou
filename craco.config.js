process.env.BROWSER = 'none';

const CracoAntDesignPlugin = require('craco-antd');
const { getThemeVariables } = require('antd/dist/theme');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: Object.assign(getThemeVariables(), {}),
            sourceMap: false,
          },
        },
        babelPluginImportOptions: {
          // es: ES6版本 lib: ES5版本
          libraryDirectory: 'es',
        },
      },
    },
  ],
};
