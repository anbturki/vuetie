<template>
  <div class="images-preview" v-if="images.length">
    <vu-layout row>
      <div class="col" v-for="(img, i) in images" :key="i">
        <img :src="img" alt="not found" class="img-thumbnail img-fluid">
      </div>
    </vu-layout>
  </div>
</template>
<script>
export default {
  name: 'VuImagesPreview',
  props: ['images']
}
</script>
