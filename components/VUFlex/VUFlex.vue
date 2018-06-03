<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'vu-flex',
  props: {
    col: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return {
        col: this.col
      }
    }
  }
}
</script>
