<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  name: 'vu-container',
  props: {
    fluid: {
      type: Boolean
    }
  },
  computed: {
    classes () {
      return {
        [this.fluid ? 'container-fluid' : 'container']: true
      }
    }
  }
}
</script>
