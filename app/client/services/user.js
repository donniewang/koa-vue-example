/**
 * Created by donnie on 16/5/18.
 */

export function list(ctx,params) {
    return ctx.$http.post('/api/user/list', params);
}

export function load(ctx,params) {
    return ctx.$http.post('/api/user/load', params);
}

export function remove(ctx,params) {
    return ctx.$http.post('/api/user/remove', params);
}

export function save(ctx,params) {
    return ctx.$http.post('/api/user/save', params);
}
