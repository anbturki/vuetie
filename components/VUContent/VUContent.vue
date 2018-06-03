<template>
  <div class="application-content">
    <slot />
  </div>
</template>
<script>
export default {
  inject: ['$validator'],
  name: 'vu-content'
}
</script>
