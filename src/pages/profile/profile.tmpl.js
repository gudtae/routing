export default `
<main>
    <section>
        <a href="/chat"><img src="src/icon/chat.svg" alt="Вернуться в чат" width="50px" height="auto"></a>
    </section>
    <section>
        <img src="src/icon/chatIcon.svg" alt="Иконка пользователя" width="100px">
        <p>{{display_name}}</p>
        <ul>
            <li>Почта {{email}}</li>
            <li>Логин {{login}}</li>
            <li>Имя {{first_name}}</li>
            <li>Фамилия {{second_name}}</li>
            <li>Имя в чате {{display_name}}</li>
            <li>Телефон {{phone}}</li>
        </ul>
        <a href="/changeProfile">Изменить данные</a>
        <a href="/changePassword">Изменить пароль</a>
        <a href="/">Выйти</a>
    </section>
</main>
`