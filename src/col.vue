<template>
    <div :class="colClass" :style="colStyle">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluCol',
    props: {
        span: {
            type: [Number, String],
        },
        offset: {
            type: [Number, String],
        }
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        colClass() {
            const {span, offset} = this
            return {col: true,[`col-${span}`]: span, [`offset-${offset}`]:offset}
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
        width: 50%;
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
    }
</style>