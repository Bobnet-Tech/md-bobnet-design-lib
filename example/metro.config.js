const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const pak = require('../package.json');

const root = path.resolve(__dirname, '..');

const modules = Object.keys({
  ...pak.peerDependencies,
});

const baseConfig = getDefaultConfig(__dirname);

const config = {
  ...baseConfig,
  watchFolders: [root],
  resolver: {
    ...baseConfig.resolver,
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),
  },
};

module.exports = mergeConfig(baseConfig, config);