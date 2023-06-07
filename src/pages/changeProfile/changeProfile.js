import backToChat from "../../icon/backToChat.svg";
import profileIcon from "../../icon/profileIcon.svg";

export default `
<main class="profile_layout">
    <aside class="profile_aside">
        <a href="/chat" class="link"><img src="${backToChat}" alt="Вернуться в чат" width="30px" height="auto">
        </a>
    </aside>
    <section class="profile_data">
        <div>
            <img src="${profileIcon}" alt="Иконка пользователя" width="100px"/>
            <p>{{display_name}}</p>
        </div>
        <ul class="profile_user_data">
            <label for="email">
                <p>Почта</p>
                <input type="text" id="email" class="input" placeholder={{email}} />
            </label>
            <label for="login">
                <p>Логин</p>
                <input type="text" id="login" class="input" placeholder={{login}} />
            </label>
            <label for="first_name">
                <p>Имя</p>
                <input type="text" id="first_" class="input" placeholder={{first_name}} />
            </label>
            <label for="second_name">
                <p> Фамилия </p>
                <input type="text" id="second_name" class="input" placeholder={{second_name}} />
            </label>
            <label for="display_name">
                <p>Имя в чате</p>
                <input type="text" id="display_name" class="input" placeholder={{display_name}} />
            </label>
            <label for="phone">
                <p>Телефон</p>
                <input type="phone" id="phone" class="input" placeholder={{phone}} />
            </label>
        </ul>
        <button>Сохранить</button>
        <section>
<main>
`