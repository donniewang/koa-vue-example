/**
 * Created by donnie on 16/5/18.
 */

export default {

    login: function(ctx,params) {
        return ctx.$http.post('/api/auth/login', params);
    },

    logout: function(ctx,params) {
        return ctx.$http.post('/api/auth/logout', params);
    }
    
}
