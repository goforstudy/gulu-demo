<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
                active: this.active
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    },
    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>
<style scoped lang="scss">
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 100%;
        &.active{
            background: red;
        }
    }
</style>