require('@rushstack/eslint-patch/modern-module-resolution');

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
    'plugin:prettier/recommended', // включает prettier и интегрирует его в eslint
  ],
  rules: {
    // Отключаем конфликты airbnb/prettier
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    // Prettier правила, обязательные для проекта
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,        // 2 пробела для отступов
        useTabs: false,
        semi: true,         // точки с запятой обязательны
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',  // избегает проблем с CRLF/LF
        printWidth: 80
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off', // выключаем правило airbnb для отступов в vue
      },
    },
  ],
};
