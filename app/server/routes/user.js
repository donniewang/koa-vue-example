/**
 * Created by donnie on 16/5/18.
 */

import koaRouter from 'koa-router';

import crypto from 'crypto';

let router = koaRouter();

function *list(next) {

    var result = {};

    try {

        var page = this.query.page || this.request.body.page || "1";
        var size = this.query.size || this.request.body.size || "10";

        page = parseInt(page);
        size = parseInt(size);

        var start = (page-1)*size;

        var users = yield this.db.all('SELECT * FROM USERS LIMIT ? OFFSET ?',[size,start]);

        result.success = 1;
        result.users = users;

    } catch (e) {
        console.error(e);

        result.success = 0;
        result.message = e.message;

    }

    this.body = result;

}

function *save(next) {

    var result = {};

    try {

        var id = this.query.id || this.request.body.id || "";
        var username = this.query.username || this.request.body.username || "";
        var password = this.query.password || this.request.body.password || "";

        if(!!!id && !!username && !!password) {
            var md5 = crypto.createHash('md5');
            md5.update(password);
            var target = md5.digest('hex');

            yield this.db.run('INSERT INTO USERS(username,password) VALUES(?,?)', [username, target]);

            result.success = 1;
        } else if(!!id && !!username && !!password) {
            var md5 = crypto.createHash('md5');
            md5.update(password);
            var target = md5.digest('hex');

            yield this.db.run('UPDATE USERS set username = ?,password = ? WHERE id = ?', [username, target, id]);

            result.success = 1;

        } else {
            throw new Error("username and password is empty");
        }

    } catch (e) {
        console.error(e);

        result.success = 0;
        result.message = e.message;

    }

    this.body = result;

}

function *load(next) {

    var result = {};

    try {

        var id = this.query.id || this.request.body.id || "";

        if(!!id) {

            var row = yield this.db.get('SELECT * FROM USERS WHERE id = ?' ,[id]);

            if(!!row) {
                result.success = 1;
                result.user = row;
            } else {
                throw new Error("user not found");
            }

        } else {
            throw new Error("id is empty");
        }

    } catch (e) {
        console.error(e);

        result.success = 0;
        result.message = e.message;

    }

    this.body = result;

}

function *remove(next) {

    var result = {};

    try {

        var id = this.query.id || this.request.body.id || "";

        if(!!id) {
            yield this.db.run('DELETE FROM USERS WHERE id = ?' ,[id]);

            result.success = 1;
        } else {
            throw new Error("id is empty");
        }

    } catch (e) {
        console.error(e);

        result.success = 0;
        result.message = e.message;

    }

    this.body = result;

}

router.all('/list',list);

router.all('/save',save);

router.all('/load',load);

router.all('/remove',remove);

export default router;
