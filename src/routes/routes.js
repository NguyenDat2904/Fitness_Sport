import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Register from '../pages/Register/Form/Form';
import Signin from '../pages/Signin/Signin';
import Club from '~/pages/Club/Club';
import LoginAdmin from '~/pages/logInAdmin/logInAdmin';
import ForgotPassWord from '~/pages/ForgorPassword/ForgotPassWord';
import VerifyEmail from '~/pages/VerifyEmail/VerifyEmail';
import ClubProvince from '~/pages/Club/ClubProvince/ClubProvince';
import Error from '~/pages/Error/Error';
import ListBlogContain from '~/pages/ListBlogContain/ListBlogContain';
import Course from '~/pages/Course/Course';
import CourseDance from '~/pages/CourseDance/CourseDance';
import CourseAll from '~/pages/CourseAll/CourseAll';
import Profile from '~/pages/Profile/Profile';
import ClubDetails from '~/pages/ClubDetails/ClubDetails';
import BlogDetails from '~/pages/BlogDetails/BlogDetails';
import ListCourse from '~/pages/Profile/ListCourse';
import Introduce from '~/pages/Profile/Introduce/Introduce';
import ListCourseFinish from '~/pages/Profile/ListCourseFinish/ListCourseFinish';
import Member from '~/Member/Member';
import Payment from '~/pages/Payment/Payment';

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
        path: '/club-details',
        component: ClubDetails,
    },
    {
        path: '/blog',
        component: ListBlogContain,
    },
    {
        path: '/blog-details',
        component: BlogDetails,
    },
    {
        path: '/error',
        component: Error,
        layout: null,
    },
    {
        path: '/admin/*',
        component: Admin,
        layout: null,
    },
    {
        layout: null,
        path: '/login/admin',
        component: LoginAdmin,
    },

    { layout: null, path: '/register', component: Register },
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
    {
        path: '/profile',
        component: ListCourse,
        layout: Profile,
    },
    {
        path: '/introduce',
        component: Introduce,
        layout: Profile,
    },
    {
        path: '/success',
        component: ListCourseFinish,
        layout: Profile,
    },
    {
        path: '/member',
        component: Member,
    },
    {
        path: '/payment',
        component: Payment,
    },
];
// Cần đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
