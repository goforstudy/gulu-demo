<template>
    <div class="toast" ref="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default"></div>
        </div>
        <div class="split-line" ref="split-line"></div>
        <span v-if="closeButton" class="close" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
export default {
    name: 'GuluToast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5,
        },
        closeButton: {
            type: Object,
            default() {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
      this.updateStyles();
      this.execAutoClose();
    },
    methods: {
        updateStyles() {
            this.$nextTick(()=> {
                this.$refs['split-line'].style.height = window.getComputedStyle(this.$refs.toast).height
            })     
        },
        execAutoClose () {
            if(this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        close() {
            this.$el.remove()
            this.$destroy()
        },
        onClickClose() {
            this.close()
            this.closeButton && this.closeButton.callback && typeof this.closeButton.callback === 'function' && this.closeButton.callback()
        }
    }
}
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast{
        line-height: 1.8;
        min-height: $toast-height;
        font-size: $font-size;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px $toast-bg;
        color: #fff;
        padding: 0 16px;
        .message{
            padding: 8px 0;
        }
        .close{
            margin-left: 16px;
            flex-shrink: 0;
        }
        .split-line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
</style>