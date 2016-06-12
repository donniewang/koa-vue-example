/**
 * Created by donnie on 16/5/18.
 */

export default {

    list: function(ctx,params) {
        return ctx.$http.post('/api/user/list', params);
    },

    load: function(ctx,params) {
        return ctx.$http.post('/api/user/load', params);
    },

    remove: function(ctx,params) {
        return ctx.$http.post('/api/user/remove', params);
    },

    save: function(ctx,params) {
        return ctx.$http.post('/api/user/save', params);
    }
    
}
