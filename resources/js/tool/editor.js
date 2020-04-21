
import Vue from "vue";
Vue.component('editor', require('../components/Editor').default);
const app = new Vue({
    el: '#app-frontend'
});
