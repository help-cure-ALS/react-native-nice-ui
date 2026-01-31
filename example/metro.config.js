const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const libraryRoot = path.resolve(projectRoot, '..');

const config = getDefaultConfig(projectRoot);

// Watch the library src folder for changes (enables hot reload for library code)
config.watchFolders = [libraryRoot];

// Packages that must resolve from example/node_modules only (single instance)
const resolveFromExample = [
  'react',
  'react-native',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  'react-native-svg',
];

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Always load these packages from example/node_modules
  if (resolveFromExample.includes(moduleName)) {
    return {
      filePath: require.resolve(moduleName, { paths: [projectRoot] }),
      type: 'sourceFile',
    };
  }
  // Default resolution for everything else
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
