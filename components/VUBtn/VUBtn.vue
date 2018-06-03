<script>
export default{
  name: 'vu-btn',
  props: {
    to: [String, Object],
    outline: Boolean,
    lg: Boolean,
    sm: Boolean,
    color: String,
    type: {
      type: String,
      default: 'button'
    },
    float: {
      type: Boolean,
      default: false
    },
    x: {
      type: String,
      default: 'right'
    },
    y: {
      type: String,
      default: 'bottom'
    }
  },
  computed: {
    classes () {
      return {
        [`btn-outline-${this.color}`]: this.outline,
        [`btn-${this.color}`]: !this.outline && this.color,
        'btn-lg': this.lg,
        'btn-sm': this.sm,
        'float-btn': this.float
      }
    },
    styles () {
      if (!this.float) return
      return {
        [this.x]: '40px',
        [this.y]: '40px'
      }
    }
  },
  render (h) {
    let el = 'button'
    let data = {'class': this.classes, staticClass: 'btn', style: this.styles}
    let ancData = {attrs: {type: this.type}}
    if (this.to) {
      ancData = {}
      el = 'router-link'
      this.$set(data, 'props', {to: this.to})
    }
    Object.assign(data, ancData)
    return h(el, data, this.$slots.default)
  }
}
</script>
