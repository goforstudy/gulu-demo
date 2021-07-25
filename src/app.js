import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './g-button-group';
import Input from './input'
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
new Vue({
    el: "#app",
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);
const expect = chai.expect;
// 单元测试
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    });
    button.$mount('#test');
    let useElement = button.$el.querySelector('use');
    console.log(useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting');

    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading')

    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.append(div)
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const gButton = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    })
    gButton.$mount()
    let spy = chai.spy(function (){});
    gButton.$on('click', spy)
    let button = gButton.$el;
    button.click();
    expect(spy).to.have.been.called();
}