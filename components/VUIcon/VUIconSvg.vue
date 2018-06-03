<template>
  <a
    :class="{active: to && ($route.name === to.name)}"
    href="javascript:void(0);"
    @click.prevent="navigate"
    class="icon-svg d-flex flex-column jusify-content-center align-items-center"
    :style="icStyle">
    <slot/>
    <div class="item d-flex justify-content-center align-items-center"></div>
  </a>
</template>
<script>
export default {
  name: 'vu-icon-svg',
  props: {
    to: {},
    icon: String
  },
  computed: {
    icStyle () {
      return {
        '--bg': `url(/images/${this.icon}.svg)`,
        '--bg-hover': `url(/images/${this.icon}-white.svg)`
      }
    }
  },
  methods: {
    navigate () {
      if (!this.to) {
        return
      }
      this.$router.push(this.to)
    }
  }
}
</script>
