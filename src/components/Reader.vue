<template>
  <div class="reader">
    <h1>{{ word }}</h1>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields(["string", "speed", "index", "state"]),
    words: function () {
      return this.string.split(" ");
    },
    word: function () {
      return this.words[this.index - 1];
    },
  },
  mounted: function () {
    setTimeout(() => {
      this.runner();
    }, 1000);
  },
  methods: {
    runner() {
      setTimeout(() => {
        if (this.index <= this.words.length) {
          this.index++;
          this.runner();
        } else {
          setTimeout(() => {
            this.state = "main";
            this.index = 0;
          }, 1000);
        }
      }, 15000 / (this.speed * this.speed));
    },
  },
};
</script>

<style scoped>
.reader {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  padding-bottom: 20vh;
}
</style>
