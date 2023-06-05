import Handlebars from 'handlebars';
import Login from './pages/login/login.tmpl.js';
import Signin from './pages/signin/signin.tmpl.js';
import Profile from './pages/profile/profile.tmpl.js';
import { ChangeProfile } from './pages/changeProfile/changeProfile.js';
import { ChangePassword } from './pages/changePassword/changePassword.js';
import { Chat } from './pages/chat/chat.js';
import { Error404 } from './pages/404/404.js';
import { Error500 } from './pages/500/500.js';



const app = document.querySelector('#app')
const router = async () => {
    const routes = [
        {
            path: '/', render: () => {
                const template = Handlebars.compile(Login);
                const result = template()
                app.innerHTML = result
            }
        },
        {
            path: '/signin', render: () => {
                const template = Handlebars.compile(Signin);
                const result = template()
                app.innerHTML = result
            }
        },
        {
            path: '/profile', render: () => {
                const template = Handlebars.compile(Profile);
                const result = template({ display_name: 'Ваня', email: 'pochta@ya.ru', login: 'ivanovivan', phone: '88005553535', first_name: 'Иван', second_name: 'Иванов'})
                app.innerHTML = result
            }
        },
        { path: '/changeProfile', render: () => app.textContent = ChangeProfile },
        { path: '/changePassword', render: () => app.textContent = ChangePassword },
        { path: '/chat', render: () => app.textContent = Chat },
        { path: '/404', render: () => app.textContent = Error404 },
        { path: '/500', render: () => app.textContent = Error500 },
    ]

    switch (window.location.pathname) {
        case '/signin':
            routes[1].render();
            break;
        case '/profile':
            routes[2].render();
            break;
        case '/changeProfile':
            routes[3].render();
            break;
        case '/changePassword':
            routes[4].render();
            break;
        case '/chat':
            routes[5].render();
            break;
        case '/404':
            routes[6].render();
            break;
        case '/505':
            routes[7].render();
            break;
        default:
            routes[0].render();
            break;
    }

}
const navigation = url => {
    history.pushState(null, null, url);
    router();
};
window.addEventListener("popstate", router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("a")) {
            e.preventDefault();
            navigation(e.target.href);
        }

    })
    router()
})
