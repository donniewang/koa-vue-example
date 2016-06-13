import path from 'path';

import moment from 'moment';

import koa from 'koa';
import session from 'koa-generic-session';
import staticCache from 'koa-static-cache';
import send from 'koa-send';

import koaBody from 'koa-body';

import sqlite3 from 'co-sqlite3';

import routes from './routes';

try {
    const app = koa();
    const body = koaBody({ multipart: true,formidable:{uploadDir:path.join(__dirname, './upload')} });
    const sessionStore = require('koa-sqlite3-session');

    app.keys = ["test"];

    app.use(session({
        store: new sessionStore(path.join(__dirname, '../../db/db'), {
        })
    }));

    app.use(staticCache(path.join(__dirname, '../../public'), {
        gzip: true
    }));

    app.use(function *(next){
        var start = new Date().getTime();
        try {
            yield next;
        } catch(e) {
            console.error(e);
            this.status = 500;
        } finally {
            var duration = new Date().getTime() - start;
            console.log(this.ip,"["+moment().format("YYYY-MM-DD HH:mm:ss")+"]",this.req.method,this.req.url,this.res.statusCode,duration,"ms");
        }
    });

    app.use(function *(next) {
        yield body.call(this, next);
    });

    app.use(function*(next){
        this.db = yield sqlite3(path.join(__dirname, '../../db/db'));
        yield this.db.run('CREATE TABLE IF NOT EXISTS USERS(id INTEGER PRIMARY KEY NOT NULL,username text,password text)');
        yield next ;
        yield this.db.close();
    });

    app.use(function*(next) {
        if(this.path.match(/\/api/)&&this.path!="/api/auth/login"){
            if (!!this.session.user) {
                yield next;
            } else {
                this.status = 401;
            }
        } else {
            yield next;
        }
    });

    app.use(routes.routes());

    app.use(function* index() {
        yield send(this, __dirname + '../../public/index.html');
    });

    app.listen(3000, function (err) {
        if (err) throw err;
        console.log(`Koa server listening on 3000`);
    });
}
catch (error) {
    console.error(error.stack || error);
}
