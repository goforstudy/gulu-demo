<template>
    <div  class="popover" @click.stop="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
          <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'GuluPopover',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper)
            const {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        },
        eventHandler(e) {
            if(
                this.$refs.popover &&
                (this.$refs.popover === e.target ||
                this.$refs.contentWrapper.contains(e.target))) { return }
            this.close()
            console.log(1, this.visible)
            
        },
        open() {
            this.visible = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.eventHandler)
            })
        },
        close() {
            this.visible = false
            document.removeEventListener('click', this.eventHandler)
        },
        onClick(event) {
            if(this.$refs.triggerWrapper.contains(event.target)) {
                if (this.visible) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    },
    mounted() {
        console.log(this.$refs.contentWrapper)
    }
}
</script>
<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>