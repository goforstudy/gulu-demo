const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受 selected 属性', function (done) {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="tab3">
            <g-tabs-head>
                <g-tabs-item name="tab1" disabled>Tabs1</g-tabs-item>
                <g-tabs-item name="tab2">Tabs2</g-tabs-item>
                <g-tabs-item name="tab3">Tabs3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane  name="tab1">tabs1 content</g-tabs-pane>
                <g-tabs-pane name="tab2">tabs2 content</g-tabs-pane>
                <g-tabs-pane  name="tab3">tabs3 content</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            const selected = vm.$el.querySelector('.tabs-item:nth-child(3)')
            expect(selected.classList.contains('active')).to.be.true
            done()
        })
    })
})