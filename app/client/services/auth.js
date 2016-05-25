/**
 * Created by donnie on 16/5/18.
 */

export function login(ctx,form,path) {
    ctx.$http.post('/api/auth/login', form, (data) => {
        if(data.success==1 && !!data.token) {
            //can save to cookie
            ctx.$router.app.$token = data.token;
            if(!!path) {
                ctx.$router.go(path);
            }
        } else {
            ctx.message = data.message;
        }
    }).error((e)=>{
        ctx.message = e.message;
    });
}

export function logout(ctx) {
    ctx.$http.post('/api/auth/logout', {}, (data) => {
        delete ctx.$router.app.$token;
        ctx.$router.go('/login');
    }).error((e)=>{
        ctx.message = e.message;
    });
}
