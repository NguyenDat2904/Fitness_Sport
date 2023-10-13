import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Club from '~/pages/Club/Club';

// Không cần đăng nhập
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
];
// Cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
