module.exports = function(router){
    router.map({
        '*': {
            component: require('./components/home.vue')
        },
        '/': {
            component: require('./components/home.vue')
        },
        '/about': {
            component: require('./components/about.vue')
        },
        '/login': {
            component: require('./components/login.vue')
        },
        '/user' : {
            component: require('./components/user.vue')
        }
    })
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
    })
}
