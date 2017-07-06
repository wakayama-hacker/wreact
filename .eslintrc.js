module.exports = {
  env: {
    browser  : true,
    commonjs : true,
    es6      : true,
    node     : true,
    mocha    : true,
  },
  plugins: [
    'import',
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion  : 2017,
    sourceType   : 'module',
    ecmaFeatures : {
      experimentalObjectRestSpread : true,
      jsx                          : true,
    }
  },
  settings: {
    'import/resolver': {
      node: {
        paths      : [
          'src',
          'test',
        ],
        extensions : [
          '.js',
          '.jsx',
        ],
      },
    },
  },
}
