<script>
export default {
  name: 'vu-icon',
  render (h) {
    var getChildrenTextContent = function (children) {
      return children.map(function (node) {
        return node.children ? getChildrenTextContent(node.children) : node.text
      }).join('')
    }
    return h('i', {
      staticClass: `fa fa-${getChildrenTextContent(this.$slots.default)}`
    })
  }
}
</script>
