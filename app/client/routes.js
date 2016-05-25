/**
 * Created by donnie on 16/2/26.
 */

module.exports = function(router){
    router.map({
        '/': {
            name:'home',
            component: require('./components/home.vue')
        },
        '/about': {
            name:'about',
            component: require('./components/about.vue')
        },
        '/user': {
            name:'user',
            component: require('./components/user.vue')
        },
        '/login': {
            name:'login',
            component: require('./components/login.vue')
        },
        '*': {
            component: require('./components/home.vue')
        }
    });
    router.beforeEach(function(transition) {
        if(transition.to.path!="/login") {
            if(!!router.app.$token) {
                transition.next();
            } else {
                transition.abort();
                router.go('/login');
            }
        } else {
            transition.next();
        }
    });
}
