import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Club from '~/pages/Club/Club';
import ClubProvince from '~/pages/Club/ClubProvince/ClubProvince';
import Error from '~/pages/Error/Error';
import ProductDetails from '~/pages/ProductDetails/ProductDetails';
import ListBlogContain from '~/pages/ListBlogContain/ListBlogContain';

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
        path: '/club/:city',
        component: ClubProvince,
    },
    {
        path: '/product-details',
        component: ProductDetails,
    },
    {
        path: '/blog',
        component: ListBlogContain,
    },
    {
        path: '/error',
        component: Error,
        layout: null,
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
