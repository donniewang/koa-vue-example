/**
 * Created by donnie on 16/5/18.
 */

export function list(ctx) {
    ctx.$http.post('/api/user/list', {}, (data) => {
        if(data.success==1 && !!data.users) {
            ctx.users = data.users;
        } else {
            ctx.message = data.message;
        }
    }).error((e)=>{
        ctx.message = e.message;
    });
}

export function load(ctx,id) {
    ctx.$http.post('/api/user/load', {id}, (data) => {
        if(data.success==1 && !!data.user) {
            ctx.user = data.user;
        } else {
            ctx.message = data.message;
        }
    }).error((e)=>{
        ctx.message = e.message;
    });
}

export function remove(ctx,id) {
    ctx.$http.post('/api/user/remove', {id}, (data) => {
        if(data.success==1) {
            ctx.success = true;
        } else {
            ctx.success = false;
            ctx.message = data.message;
        }
    }).error((e)=>{
        ctx.message = e.message;
    });
}

export function save(ctx,user) {
    ctx.$http.post('/api/user/save', user, (data) => {
        if(data.success==1) {
            ctx.success = true;
        } else {
            ctx.success = false;
            ctx.message = data.message;
        }
    }).error((e)=>{
        ctx.message = e.message;
    });
}
