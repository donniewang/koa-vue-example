/**
 * Created by donnie on 16/5/18.
 */

import path from 'path';

import koaRouter from 'koa-router';

import swig from 'swig';


let router = koaRouter();


function *index(next) {

    this.body = yield new Promise(resolve => {
        resolve(swig.renderFile(path.join(__dirname, '../../../public/index.html')));
    });

    yield next;
}

router.all('/',index);

export default router;
