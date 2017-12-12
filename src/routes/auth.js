import Router from 'koa-router';
import * as authCtrl from '../controller/auth';

const routerAuth = new Router();
routerAuth.post('/auth/register', authCtrl.signUp);
routerAuth.post('/auth/login', authCtrl.signIn);

export default routerAuth.routes();