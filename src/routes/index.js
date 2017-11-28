import routerAuth from './auth';
import routerUser from './users';
import routerArea from './area';
import routerCategory from './category';
import routerDistrict from './district';
import compose from 'koa-compose';

export default () => compose([
    routerAuth,
    routerUser,
    routerArea,
    routerCategory,
    routerDistrict,
]);