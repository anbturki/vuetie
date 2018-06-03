<template>
  <div :class="classes">
    <slot name="pre"/>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vu-form-group',
  inject: ['$validator'],
  props: {
    row: Boolean,
    ColAuto: Boolean,
    InputGroup: Boolean
  },
  computed: {
    classes () {
      return {
        [`form-${this.row ? 'row' : 'group'}`]: !this.ColAuto && !this.InputGroup,
        'col-auto': this.ColAuto,
        'input-group': this.InputGroup
      }
    }
  }
}
</script>
