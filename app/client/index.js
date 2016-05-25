/**
 * Created by donnie on 16/2/22.
 */

import './style/style.less'

import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource'

import app from './app.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(VueRessource);

var router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

routes(router);

router.start(app, 'app');
