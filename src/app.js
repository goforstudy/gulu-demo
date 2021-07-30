import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './g-button-group';
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
new Vue({
    el: "#app",
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
    },
    data() {
        return {
            message: '',
        }
    }
})
