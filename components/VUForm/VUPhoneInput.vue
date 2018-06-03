<template>
<vu-form-group row>
  <vu-form-group
    input-group
    class="mb-3">
    <div class="input-group-append">
      <div class="iti-flag sa"></div>
    </div>
    <VuInput
      :name="name"
      :label="label"
      type="tel"
      class="form-control p-0 m-0"
      style="background: transparent"
      :value="value"
      @input="checkTyping"
      rules="required|SAUPhone"
    />
  </vu-form-group>
</vu-form-group>
</template>
<script>
import phone from 'phone'
export default {
  name: 'VuPhoneInput',
  inject: ['$validator'],
  props: {
    value: {},
    id: String,
    label: {
      default: 'phone number'
    },
    name: {
      default: 'phone'
    }
  },
  computed: {
    fieldId () {
      return this.id || this.name
    }
  },
  methods: {
    checkTyping (e) {
      this.$emit('input', phone(e, 'SAU')[0] || e)
    }
  }
}
</script>
<style>
.iti-flag {
  background-image: url('./flags.ae33acae.png');
}
</style>
