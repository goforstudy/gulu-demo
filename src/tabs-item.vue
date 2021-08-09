<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluTabsItem',
    data() {
        return {
            active: false
        }
    },
    props: {
        disabled: {
            default: false,
            type: Boolean,
        },
        name: {
            type: String || Number,
            required: true,
        },
    },
    inject: ['eventBus'],
    computed: {
        classes() {
            return {
                active: this.active,
                disabled: this.disabled,
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    },
    methods: {
        onClick() {
            if(this.disabled) {
                return
            }
            this.eventBus.$emit('update:selected', this.name, this)
        }
    }
}
</script>
<style scoped lang="scss">
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 100%;
        &.active{
            color: $blue;
            font-weight: bold;
        }
        &.disabled{
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>