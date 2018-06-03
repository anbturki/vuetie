<template>
  <div class="vu-layout" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  name: 'vu-layout',
  props: {
    reverse: Boolean,
    FlexColumn: Boolean,
    row: Boolean
  },
  computed: {
    classes () {
      return {
        'row': !!this.row,
        'd-flex': !this.row,
        'flex-column': !!(!this.row && this.FlexColumn),
        'flex-column-reverse': !!(!this.row && this.FlexColumn && this.reverse),
        'flex-row-reverse': !!(!this.row && this.reverse)
      }
    }
  }
}
</script>
