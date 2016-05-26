/**
 * Created by donnie on 16/5/18.
 */

export function login(ctx,params) {
    return ctx.$http.post('/api/auth/login', params);
}

export function logout(ctx,params) {
    return ctx.$http.post('/api/auth/logout', params);
}
