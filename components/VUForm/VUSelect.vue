<template>
  <div>
    <label :class="{'sr-only': SrOnly}">{{$t(label)}}</label>
    <multiselect
      :options="data"
      :label="ShowLabel"
      :track-by="trackBy"
      :multiple="multiple"
      :show-labels="showLabels"
      @input="pushSelected"
      :value="currentValue || data.find(el => el[trackBy] === value)"
      :placeholder="untranslated ? label : $t(label)"
      />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
require('vue-multiselect/dist/vue-multiselect.min.css')
export default {
  name: 'VuSelect',
  components: {Multiselect},
  props: {
    value: {},
    ShowLabel: {
      type: String,
      default: 'display_name'
    },
    trackBy: {
      type: String,
      default: 'value'
    },
    label: String,
    multiple: Boolean,
    data: Array | Object,
    showLabels: Boolean,
    SrOnly: Boolean,
    untranslated: Boolean
  },
  data () {
    return {
      currentValue: ''
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    pushSelected (obj) {
      this.currentValue = obj
      if (obj instanceof Array) {
        const selected = obj.map(o => o[this.trackBy])
        this.$emit('input', selected)
      } else {
        this.$emit('input', obj[this.trackBy])
      }
    }
  }
}
</script>
<style lang="scss">
$shadow: 1px 3px 6px #c5c5c5;
$bg: #f9f9f9;
.multiselect__tags {
    background-color: #f4f4f3;
    border-radius: 0;
    border: none;
    background: transparent;
    border-bottom: 1px solid #ccc;
}
.multiselect__content-wrapper {
  border-radius: 0;
  border: none;
  background-color: $bg;
  box-shadow: $shadow
}
.multiselect--active {
  background-color: $bg;
  box-shadow: $shadow;
}
</style>
