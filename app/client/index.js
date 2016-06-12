/**
 * Created by donnie on 16/2/22.
 */

import './style/style.less'

import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource'

import app from './components/app';
import routes from './routes';

Vue.use(VueRouter);

var router = new VueRouter({
    hashbang: true,
    history: false
});

routes(router);

Vue.use(VueRessource);

router.start(app, 'app');

window.router = router;
