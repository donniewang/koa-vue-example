/**
 * Created by donnie on 16/5/17.
 */

import koaRouter from 'koa-router';

import auth from './auth'

import user from './user'

let router = koaRouter();

router.use('/api/auth',auth.routes());

router.use('/api/user',user.routes());

export default router;
