<template>
  <div class="card card--box rounded-0 border-0">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  name: 'vu-card'
}
</script>

<style lang="scss">
.card{
  &--box{
    box-shadow: var(--box-shadow);
  }
}
</style>
