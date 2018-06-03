export default {
  props: {
    fullhight: Boolean
  },
  data () {
    return {
      fullhightClass: this.fullhight ? 'h-100' : ''
    }
  }
}
