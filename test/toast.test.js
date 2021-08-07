const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe( 'props', function() {
        it('接受 autoClose', function (done) {
            this.timeout(15000)
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('接受 closeButton', () => {
            const callback = sinon.fake();
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: 'close it',
                        callback,
                    }
                }
            }).$mount(div)
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('close it')
            closeButton.click();
            expect(callback).to.have.been.called
        })
        it('接受 enableHTML', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            }).$mount(div)
            vm.$slots.default = '<strong id="test">html message</strong>'
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
 
})  