<template>
  <v-app>
    <div v-if="state == 'main'">
      <TextField />
      <Options />
    </div>
  </v-app>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import TextField from "./components/TextField.vue";
import Options from "./components/Options.vue";

export default {
  name: "App",
  computed: {
    ...mapFields(["string", "state", "dark"]),
  },
  components: {
    TextField,
    Options,
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
