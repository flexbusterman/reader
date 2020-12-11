<template>
  <p>{{ words }}</p>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields(["string", "speed", "index"]),
    words: function () {
      return this.string.split(" ");
    },
  },
  /* methods: { */
  /* runner() { */
  /* setTimeout(() => { */
  /* if() */
  /* this.index++; */
  /* }, 1000 / this.speed); */
  /* }, */
  /* }, */
};
</script>

<style>
</style>
