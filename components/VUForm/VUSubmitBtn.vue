<template>
<vu-btn type="submit" :disabled="disable || loading" color="primary" lg>
  <template v-if="loading">
    <i class="fa fa-spinner fa-spin"></i> &nbsp; {{$t('please wait')}}
  </template>
  <template v-else>
    <slot>
      {{$t(label)}}
    </slot>
  </template>
</vu-btn>
</template>
<script>
export default {
  name: 'VuSubmitBtn',
  props: {
    disable: {
      default: true,
      type: Boolean
    },
    label: String,
    type: {
      type: String,
      default: 'submit'
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>
