<template>
  <div class="order-first p-3 card--box--header gradient-bottom">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'vu-card-header'
}
</script>
<style lang="scss">
.card{
  &--box{
    &--header{
      background-color: #f5f5f5
    }
  }
}
</style>
