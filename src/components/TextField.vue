<template>
  <div>
    <textarea v-model="string" placeholder="Paste text here"></textarea>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields(["string"]),
  },
};
</script>

<style>
</style>
