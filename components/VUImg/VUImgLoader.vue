<template>
  <div :id="TrackBy" v-if="loaded">
    <slot></slot>
  </div>
  <VuContentPlaceholder v-else :height="height" class="m-0"/>
</template>
<script>
import blankImg from '@/assets/images/blank.png'
import $ from 'jquery'
export default {
  name: 'VuImgLoader',
  props: {
    ImgSrc: {
      type: String
    },
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '230px'
    },
    TrackBy: {
      required: true,
      type: [Number, String]
    },
    className: String
  },
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    const img = new Image()
    const self = this
    if (this.ImgSrc) {
      img.src = this.ImgSrc
    } else {
      img.src = blankImg
    }
    img.style.height = this.height
    img.style.width = this.width
    if (this.className) {
      img.className += this.className
    }
    this.$on('imgPrepared', () => {
      self.loaded = true
      self.$nextTick(() => {
        $(img).prependTo(document.getElementById(this.TrackBy))
      })
    })
    img.onload = function () {
      self.$emit('imgPrepared')
    }
  }
}
</script>
