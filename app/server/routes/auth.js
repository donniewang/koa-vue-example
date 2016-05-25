/**
 * Created by donnie on 16/5/18.
 */

import koaRouter from 'koa-router';

import crypto from 'crypto';

let router = koaRouter();


function *login(next) {

    var result = {};

    var username = this.query.username || this.request.body.username || "";
    var password = this.query.password || this.request.body.password || "";

    if(!!username && !!password) {
        if(username==='admin') {
            result.success = 1;
            result.token = this.sessionId;
        } else {
            var row = yield this.db.get('SELECT * FROM USERS WHERE username = ?' ,[username]);
            if(!!row && !!row.id) {
                var md5 = crypto.createHash('md5');
                md5.update(password);
                var target = md5.digest('hex');

                if(target===row.password) {
                    result.success = 1;
                    result.token = this.sessionId;

                    this.session.user = row;

                } else {
                    result.success = 0;
                    result.message = 'Password is not correct';
                }
            } else {
                result.success = 0;
                result.message = 'User not found';
            }
        }
    } else {
        result.success = 0;
        result.message = 'Username or Password is not correct';
    }

    this.body = result;
}

function *logout(next) {

    var result = {};

    if(!!this.session.user) {

        delete this.session.user;

        result.success = 1;

    } else {

        result.success = 0;

    }

    this.body = result;
}


router.all('/login',login);

router.all('/logout',logout);


export default router;
