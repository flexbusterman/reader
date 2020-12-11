<template>
  <div>
    <h1 @click="show = !show" class="pointer">
      {{ show ? "Hide" : "Show" }} Text
    </h1>
    <transition>
      <h1 v-if="show">{{ message }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is a test!",
      show: false,
    };
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
.v-enter-active {
  animation: bounceIn 0.5s;
}
.v-leave-active {
  animation: bounceIn 0.5s reverse;
}
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
