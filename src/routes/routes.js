import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';

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
];
// Cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
