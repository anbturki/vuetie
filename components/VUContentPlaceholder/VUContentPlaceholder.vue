<script>
export default {
  name: 'VuContentPlaceholder',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: '10px'
    }
  },
  computed: {
    styles () {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  render (h, context) {
    const data = {style: this.styles, staticClass: 'animated-background'}
    return h(this.tag, data)
  }
}
</script>
<style scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  margin: 10px 0;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
}
</style>
