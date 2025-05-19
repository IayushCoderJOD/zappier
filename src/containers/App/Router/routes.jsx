
import NotFound404 from '../../DefaultPage/404.jsx';
import Login from './../../Account/Login';
import CreateZap from './../../dashboards/MainZap/CreateZap.';

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/create-zap',
        component: CreateZap,
    },
    { path: '*', component: NotFound404, }
];

export default routes;
