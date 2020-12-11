<template>
  <v-app>
    <div v-if="state == 'main'">
      <TextField />
    </div>
    <div v-if="state == 'read'">
      <Reader />
    </div>
    <v-footer fixed>
      <Options />
    </v-footer>
  </v-app>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import TextField from "./components/TextField.vue";
import Options from "./components/Options.vue";
import Reader from "./components/Reader.vue";

export default {
  name: "App",
  computed: {
    ...mapFields(["string", "state", "dark"]),
  },
  components: {
    TextField,
    Options,
    Reader,
  },
  data: () => ({
    //
  }),
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.state = "main";
      }
    });
  },
};
</script>
<style>
</style>>
