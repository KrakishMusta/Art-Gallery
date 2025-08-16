require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@vue/eslint-config-airbnb',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,        // точки с запятой обязательны
        tabWidth: 2,       // 2 пробела
        useTabs: false,
        singleQuote: true, // одинарные кавычки (можно выключить)
        trailingComma: 'es5'
      },
    ],
  },
}
