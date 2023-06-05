export default `
<main>
<section class="wrapper">
    <p>Регистрация</p>
    <label for="email">
        Почта
        <input type="email" id="email" name="email">
    </label>
    <label for="login">
        Логин
        <input type="text" id="login" name="login">
    </label>
    <label for="first_name">
        Имя
        <input type="text" id="first_name" name="first_name">
    </label>
    <label for="second_name">
        Фамилия
        <input type="text" id="second_name" name="second_name">
    </label>
    <label for="phone">
        Телефон
        <input type="tel" id="phone" name="phone">
    </label>
    <label for="password">
        Пароль
        <input type="password" id="password" name="password">
    </label>
    <label for="passwordAgain">
        Пароль (введите еще раз)
        <input type="password" id="passwordAgain" name="password">
    </label>
    <a href="/chat">создать аккаунта</a>
    <a href="/">уже есть аккаунт?</a>
</section>
</main>`