module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    indent: [
      'error',
      2,
      { FunctionDeclaration: { parameters: 'first' }, SwitchCase: 1 },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
    strict: ['error'],
    'import/no-cycle': 'off',
    'vue/multi-word-component-names': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-async-promise-executor': 0,
    'vue/no-v-html': 0,
    'import/no-unresolved': 0,
    'consistent-return': 0,
    'vue/comment-directive': 0,
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-shadow': [
      'error',
      { builtinGlobals: false, hoist: 'never', allow: ['state'] },
    ],
    'import/extensions': 0,
  },
  settings: {
    'import/core-modules': ['vue', 'vuetify'],
    'import/extensions': 'off',
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
}
