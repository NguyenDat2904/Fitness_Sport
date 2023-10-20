import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Register from '../pages/Register/Form/Form';
import Signin from '../pages/Signin/Signin';
import Club from '~/pages/Club/Club';
import ForgotPassWord from '~/pages/ForgorPassword/ForgotPassWord';
import VerifyEmail from '~/pages/VerifyEmail/VerifyEmail';
import ClubProvince from '~/pages/Club/ClubProvince/ClubProvince';
import Error from '~/pages/Error/Error';
import ProductDetails from '~/pages/ProductDetails/ProductDetails';
import ListBlogContain from '~/pages/ListBlogContain/ListBlogContain';
import Course from '~/pages/Course/Course';
import CourseDance from '~/pages/CourseDance/CourseDance';
import CourseAll from '~/pages/CourseAll/CourseAll';

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
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/signin',
        component: Signin,
    },
    {
        path: '/forgot',
        component: ForgotPassWord,
    },
    {
        path: '/verify',
        component: VerifyEmail,
    },
    {
        path: '/yoga',
        component: Course,
    },
    {
        path: '/dance',
        component: CourseDance,
    },
    {
        path: '/course',
        component: CourseAll,
    },
];
// Cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
