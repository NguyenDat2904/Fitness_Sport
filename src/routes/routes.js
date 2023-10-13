import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Register from '../pages/Register/Form/Form'
import Signin from '../pages/Signin/Signin';
// Không cần đăng nhập
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/admin',
        component: Admin,
        layout: null,
    },
    {
        path:'/register',
        component:Register,
    }
];
// Cần đăng nhập
const privateRoutes = [
    {
        path:'/signin',
        component:Signin,

    }
];

export { publicRoutes, privateRoutes };
