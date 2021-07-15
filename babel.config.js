module.exports = (api) => {
  api.cache(false);
  return {
    sourceType: 'unambiguous',
    presets: [
      '@babel/preset-env',
    ],
    plugins: [
//      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-private-property-in-object',
      '@babel/plugin-transform-runtime',
    ],
  };
};
