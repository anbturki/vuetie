<template>
  <div class="p-4">
    <slot />
  </div>
</template>
<script>
export default {
  inject: ['$validator'],
  name: 'vu-card-content'
}
</script>
