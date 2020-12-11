<template>
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />
    <textarea v-model="message" placeholder="Paste text here"></textarea>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
