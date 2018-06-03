<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: 'home'}">
      <slot name="brand"/>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <slot />
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'vu-toolbar',
  props: {
    responsive: Boolean
  }
}
</script>
