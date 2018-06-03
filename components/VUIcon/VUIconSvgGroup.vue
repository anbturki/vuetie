<template>
<div class="position-relative">
  <div class="position-absolute w-100 svg-icons-holder" style="z-index: 1">
    <div class="d-flex justify-content-around">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'VuIconSvgGroup'
}
</script>
<style scoped>
.svg-icons-holder {
  top: -15px
}
</style>
