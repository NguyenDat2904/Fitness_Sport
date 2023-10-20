import Home from '~/pages/Home/Home';
import Admin from '~/pages/Admin/Admin';
import Club from '~/pages/Club/Club';
import Course from '~/pages/Course/Course';
import CourseDance from '~/pages/CourseDance/CourseDance';
import CourseAll from '~/pages/CourseAll/CourseAll';


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
