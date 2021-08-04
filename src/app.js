import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './g-button-group';
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-footer', Footer);
Vue.component('g-content', Content);
Vue.component('g-toast', Toast);
Vue.use(plugin)
new Vue({
    el: "#app",
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        click() {
            this.$toast('hello world')
        }
    },
    data() {
        return {
            message: '',
        }
    }
})
