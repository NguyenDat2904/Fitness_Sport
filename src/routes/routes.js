import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Register from '../pages/Register/Form/Form'
import Signin from '../pages/Signin/Signin';
import Club from '~/pages/Club/Club';
import ForgotPassWord from '~/pages/ForgorPassword/ForgotPassWord';
import VerifyEmail from '~/pages/VerifyEmail/VerifyEmail';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/club',
        component: Club,
    },
    {
        path: '/admin',
        component: Admin,
        layout: null,
    },
    {
        path:'/register',
        component:Register,
    },
    {
        path:'/signin',
        component:Signin,

    },
    {
        path:'/forgot',
        component:ForgotPassWord,
    },
    {
        path:'/verify',
        component:VerifyEmail,
    }

];
// Cần đăng nhập
const privateRoutes = [
];

export { publicRoutes, privateRoutes };
