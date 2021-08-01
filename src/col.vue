<template>
    <div :class="colClass" :style="colStyle">
      <slot></slot>
    </div>
</template>
<script>
const validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
        if(!['span', 'offset'].includes(key)) {
            vaild = false
        }
    })
    return value
}
export default {
    name: 'GuluCol',
    props: {
        span: {
            type: [Number, String],
        },
        offset: {
            type: [Number, String],
        },
        phone: {
            type: Object,
            validator,
        },
        ipad: {
            type: Object,
            validator,
        },
        narrowPc: {
            type: Object,
            validator,
        },
        pc: {
            type: Object,
            validator,
        },
        widePc: {
            type: Object,
            validator,
        },
    },
    data() {
        return {
            gutter: 0
        }
    },
    methods: {
            createClass (obj, str = '') {
                let array = [];
                if(!obj) {
                    return []
                }
                if(obj.span) {
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset) {
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
    },
    computed: {
        colClass() {
            const {span, offset, phone, ipad, narrowPc, pc, widePc} = this
            return [
                    'col',
                    ...this.createClass({span, offset}),
                    ...this.createClass(phone, 'phone-'),
                    ...this.createClass(ipad, 'ipad-'),
                    ...this.createClass(narrowPc, 'narrow-pc-'),
                    ...this.createClass(pc, 'pc-'),
                    ...this.createClass(widePc, 'wide-pc-'),
            ]
        },
        colStyle() {
            const {gutter} = this
            return {
                        paddingLeft: `${gutter/2}px`,
                        paddingRight: `${gutter/2}px`
                    }
        }
    }
}
</script>
<style scoped lang="scss">
    .col{
        $class: col-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                width: ($n/24)*100%;
            }
        }
        $class: offset-;
        @for $n from 1 through 24{
            &.#{$class}#{$n}{
                margin-left: ($n/24)*100%;
            }
        }
        @media (max-width: 576px) {
            $class: col-phone-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width: ($n/24)*100%;
                }
            }
            $class: offset-phone-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left: ($n/24)*100%;
                }
            }
       }
        @media (min-width: 577px) {
            $class: col-ipad-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width: ($n/24)*100%;
                }
            }
            $class: offset-ipad-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left: ($n/24)*100%;
                }
            }
       }
       @media (min-width: 769px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width: ($n/24)*100%;
                }
            }
            $class: offset-ipad-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left: ($n/24)*100%;
                }
            }
       }
        @media (min-width: 993px) {
            $class: col-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width: ($n/24)*100%;
                }
            }
            $class: offset-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left: ($n/24)*100%;
                }
            }
       }
        @media (min-width: 1201px) {
            $class: col-wide-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    width: ($n/24)*100%;
                }
            }
            $class: offset-wide-pc-;
            @for $n from 1 through 24{
                &.#{$class}#{$n}{
                    margin-left: ($n/24)*100%;
                }
            }
       }
    }
</style>