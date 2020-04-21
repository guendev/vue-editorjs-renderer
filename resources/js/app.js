import 'jquery'
import './bootstrap';

import Vue from "vue";

import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.component('editor', require('./components/Editor').default);
Vue.component('editor-render-view', require('./components/EditorRenderView').default);

const app = new Vue({
    el: '#app-frontend'
});
