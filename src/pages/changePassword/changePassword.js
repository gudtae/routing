import backToChat from "../../icon/backToChat.svg";
import profileIcon from "../../icon/profileIcon.svg";


export default`
<main>
    <aside>
        <a href="/chat">
            <img src=${backToChat} alt="Вернуться назад"width="30px" height="auto"/>
        </a>
    </aside>
    <section>
        <div><img src=${profileIcon} alt="profilelogo" width="100px"/></div>
        <label for="old_password">
            <p>Старый пароль</p>
            <input type="password" class="input" name="old_password" id="ld_password" />
        </label>
        <label for="new_password">
            <p>Новый пароль</p>
            <input type="password" name="new_password" id="new_password" class="input" />
        </label>
        <label for="repeat_password">
            <p>Повторите пароль</p>
            <input type="password" name="new_password" id="repeat_password" class="input" />
        </label>
        <button>Сохранить</button>
    </section>
</main>
`
