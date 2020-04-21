window._ = require('lodash');
import axios from 'axios';
import Vue from "vue";

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = axios;
window.Vue = Vue;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

