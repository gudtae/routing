1. ссылка на макет figma
https://www.figma.com/file/5SdcaCVsZEull9iuLNMdxR/sprint-1?type=design&node-id=0%3A1&t=8MNOmyMBsSBlTWWi-1
2. подключить шаблонизатор
pug?
3. запуск проекта по npm run start 3000 порт в vite.config.js
server: {
    port: 3000,
  },
в package.json "start": "vite", вместо dev, подходит ли для сборки?
4. имена name
    авторизация: login, password;
    регистрация: first_name, second_name, login, email, password, phone;
    чаты и лента переписки: message;
    пользователь: first_name, second_name, display_name, login, email, phone;
        поля изменения пароля: oldPassword, newPassword

5. использовать для перехода между страницами <a>
