<template>
  <div class="wrapper" :class="{error}">
    <!-- input 方法 与 v-model 相结合 使input组件实现双向绑定 -->
    <input type="text" :value="value" :readonly="readonly" :disabled="disabled" 
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    @blur="$emit('blur', $event.target.value)"
    @focus="$emit('focus', $event.target.value)"
    />
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from "./icon"
  export default{
    name: 'GuluInput',
    components: {
      GIcon: Icon
    },
    props: {
      value: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String,
        default: '',
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $box-shadow-color: rgba(0, 0, 0, 0.5) ;
  $border-radius: 4px;
  $font-size: 12px;
  $red: #F1453D;
  .wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child){
      margin-right: .5em;
    }
    &.error{
      > input{
        border-color: $red;
      }
    }
    .icon-error{
      fill: $red;
    }
    .error-message{
      color: $red;
    }
    > input{
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover{
        border-color: $border-color-hover;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly]{
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
  }
</style>