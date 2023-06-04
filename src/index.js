import Login from './pages/login/login.js'
import Signin from './pages/signin/signin.js'
import Profile from './pages/profile/profile.js'
import ChangeProfile from './pages/changeProfile/changeProfile.js'
import ChangePassword from './pages/changePassword/changePassword.js'
import Chat from './pages/chat/chat.js'
import Error404 from './pages/404/404.js'
import Error505 from './pages/505/505.js'
const app = document.querySelector('#app')
const router = async () => {
    const routes = [
        { path: '/', view: () => console.log('login view') },
        { path: '/signin', view: () => console.log('signin view') },
        { path: '/profile', view: () => console.log('profile view') },
        { path: '/changeProfile', view: () => console.log('chProfile view') },
        { path: '/changePassword', view: () => console.log('chPassword view') },
        { path: '/chat', view: () => console.log('chat view') },
        { path: '/404', view: () => console.log('404 view') },
        { path: '/505', view: () => console.log('505 view') },
    ]
    switch (window.location.pathname) {
        case '/signin':
            routes[1].view();
            break;
        case '/profile':
            routes[2].view();
            break;
        case '/changeProfile':
            routes[3].view();
            break;
        case '/changePassword':
            routes[4].view();
            break;
        case '/chat':
            routes[5].view();
            break;
        case '/404':
            routes[6].view();
            break;
        case '/505':
            routes[7].view();
            break;
        default:
            routes[0].view();
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
