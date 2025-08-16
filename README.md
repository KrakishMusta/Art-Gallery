# Art-Gallery
Главная страница сайта художественной галереи. Тестовое задание, демонстрирующее владение заданным стеком технологий. Свёрстано по дизайн-макету Figma.
<<<<<<< HEAD

## Стек технологий

## Описание к настройкам package.json для линтеров и форматоров
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --build",
    "lint": "eslint . --ext .ts,.tsx,.vue", //проверка всех .ts, .tsx, .vue файлов ESLint.
    "lint:fix": "eslint . --ext .ts,.tsx,.vue --fix", //автофикс ошибок ESLint + Prettier (если Prettier интегрирован в ESLint).
    "format": "prettier --check \"src/**/*.{ts,vue,js,jsx,tsx}\"", //проверка форматирования Prettier отдельно (по src).
    "format:fix": "prettier --write \"src/**/*.{ts,vue,js,jsx,tsx}\"", //автоисправление форматирования Prettier.
    "check": "npm run lint && npm run type-check && npm run format", //единая команда для проверки ESLint + TypeScript + Prettier.
    "fix": "npm run lint:fix && npm run type-check && npm run format:fix" //единая команда для исправления всего, что возможно.
  },
=======
## Стек технологий
>>>>>>> 8b71044218fb76609ce78b2a3c4e61cca558028d
