const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Define your custom Metro configuration
const customConfig = {
  // Add your custom resolver, transformer, or other options here
};

// Merge the custom configuration with the default configuration
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Wrap the merged configuration with `react-native-reanimated`
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
