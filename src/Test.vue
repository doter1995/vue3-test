<template>
  <span class="example">{{text}}</span>
</template>
<script lang="ts">
export default {
  props:{
      text:{
          type:String,
          defaultValue:"TEst"
      }
  }
}
</script>
<style lang="scss" scoped>
.example{
  font-size: 1.8rem;
  color: red;
}
</style>>