<template>
  <form method="post" @submit.prevent="$emit('onSubmit')" novalidate class="needs-validation">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'vu-form',
  inject: ['$validator']
}
</script>
