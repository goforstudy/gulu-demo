<template>
    <div class="wrapper"  :class="toastClass">
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
            default: 50,
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
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['bottom', 'top', 'middle'].indexOf(value) >= 0
            }
        }
    },
    mounted() {
      this.updateStyles();
      this.execAutoClose();
    },
    computed: {
        toastClass() {
            return {[`position-${this.position}`]: true}
        }
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
            this.$emit('close')
            this.$destroy()
        },
        onClickClose() {
            this.close()
            this.closeButton && this.closeButton.callback && typeof this.closeButton.callback === 'function' && this.closeButton.callback(this)
        }
    }
}
</script>
<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $animation-duration: 1s;
    @keyframes slide-up {
        0%{
            opacity: 0;
            transform: translateY(100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0%);
        }
    }
    @keyframes slide-down {
        0%{
            opacity: 0;
            transform: translateY(-100%);
        }
        100%{
            opacity: 1;
            transform: translateY(0%);
        }
    }
    @keyframes slide-in {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .wrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top{
            top: 0;
            .toast{
                border-top-right-radius: 0;
                border-top-left-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-bottom{
            bottom: 0;
            .toast{
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%, -50%);
            .toast{
                animation: slide-in $animation-duration;
            }
        }
    }
    .toast{
        line-height: 1.8;
        font-size: $font-size;
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