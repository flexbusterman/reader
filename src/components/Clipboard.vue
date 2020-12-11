<template>
  <div>
    <p>Clipboard contents:</p>
    <p>{{ clipboard }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    clipboard: function () {
      return window.clipboardData.getData("Text");
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
