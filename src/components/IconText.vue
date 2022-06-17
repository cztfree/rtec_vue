<template>
  <div class="layout-text-icon" @click="onClick">
    <img class="icon" :style="{ width: imgWidth + 'rem', height: imgHeight + 'rem' }" :src=imgSrc alt=""/>
    <p class="text" :style="{ fontSize: textSize + 'rem', color: textcolor, marginTop: marginTop + 'rem' }">{{text}}</p>
  </div>
</template>

<script>

export default ({
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    imgWidth: {
      type: String,
      default: ""
    },
    imgHeight:{
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    textSize: {
      type: String,
      default: ""
    },
    textcolor: {
      type: String,
      default: ""
    },
    marginTop: {
      type: String,
      default: ""
    },

  },
  methods: {
    onClick() {
      this.$emit('on-click', this.text);
    }
  }
  
})
</script>

<style lang="scss">
.layout-text-icon {
  display: flex;
  flex-direction: column;
    .icon {
      margin: auto;
    }
    .text {
      margin: auto;
    }
}
</style>
