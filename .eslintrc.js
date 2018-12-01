module.exports = {
  "parser": "babel-eslint",
    extends: [
      'unobtrusive',
      'eslint:recommended',
      'plugin:jest/recommended',
      'plugin:react/recommended'
    ],
    plugins: ['jest','react'],
    env: {
      browser: true,
      node: true,
      'jest/globals': true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    globals: {
    },
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
// default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.0", // React version, default to the latest React stable release
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
// propTypes object, e.g. `forbidExtraProps`.
// If this isn't set, any propTypes wrapped in
// a function will be skipped.
    },

    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      semi: [2, 'always'],
      quotes: [2, 'single'],
      indent: [2, 2],
      'linebreak-style': [2, 'unix'],
      'brace-style': [2, '1tbs'],
      'array-bracket-spacing': [2, 'never'],
      camelcase: [2, {properties: 'always'}],
      'keyword-spacing': [2],
      'eol-last': [2],
      'no-trailing-spaces': [2],
      'no-process-env': ['off', 'always'],
      'no-console': ['off','always']
    }
  };
