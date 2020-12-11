<template>
  <div class="main">
    <Counter />
    <Test />
    <TextField />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import TextField from "./components/TextField.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Test,
    TextField,
    Counter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  display: grid;
}
</style>
