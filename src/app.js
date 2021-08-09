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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
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
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.use(plugin)
new Vue({
    el: "#app",
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        clickEvent(message, position) {
            this.$toast(message, {
                enableHtml: true,
                position,
                closeButton: {
                    text: 'close',
                    callback: (value) => {
                        console.log('回调',value)
                    } 
                }
            })
        },
        clickTop() {
            this.clickEvent('我在顶部', 'top')
        },
        clickMiddle() {
            this.clickEvent('我在中间', 'middle')
        },
        clickBottom() {
            this.clickEvent('我在底部', 'bottom')
        }
    },
    data() {
        return {
            message: '',
            selected: 'tab3'
        }
    }
})
