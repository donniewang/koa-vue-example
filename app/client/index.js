/**
 * Created by donnie on 16/2/22.
 */

import '../../web/style/style-pc.less'
import '../../web/style/style-phone.less'
import '../../web/style/style-pad.less'

import 'bootstrap/less/bootstrap.less';

import 'font-awesome/less/font-awesome.less';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import routes from './routes';

Vue.use(VueRouter);

var router = new VueRouter();

routes(router);

router.start(App, 'app');
