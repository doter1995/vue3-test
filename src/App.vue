<template>
  <div class="example">The <test :text="test"></test> is vue3.0 with TS </div>
</template>
<script lang="ts">
import { reactive } from 'vue';
import Test from "./Test.vue";

export default {
  components:{
    Test
  },
  data:reactive({test:"TEST"})
}
</script>
<style lang="scss" scoped>
.example{
  font-size: 1.6rem;
}
</style>
