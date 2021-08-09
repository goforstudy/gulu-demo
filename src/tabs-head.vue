<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
          <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (item, vm) => {
            const {width, height, top, left} = vm.$el.getBoundingClientRect()
            console.log(width, height, top, left)
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.transform = `translateX(${left}px)`
        })
    }

}
</script>
<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;

    .tabs-head{
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 0.5s;
        }
        > .actions-wrapper{
            margin-left: auto;
        }

    }
</style>