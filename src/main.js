import Vue from 'vue';
import App from './App.vue';
import store from '../store/index.js';
import vuetify from './plugins/vuetify';

new Vue({
    el: '#app',
    store,
    vuetify,
    render: h => h(App)
});
