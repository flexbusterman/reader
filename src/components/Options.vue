<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          elevation="3"
          large
          block
          @click="this.$vuetify.theme.dark = !this.$vuetify.theme.dark"
          >TOGGLE DARK MODE</v-btn
        >
      </v-col>
      <v-col>
        <v-slider
          v-model="speed"
          label="Speed"
          thumb-label="always"
          :max="10"
          :min="1"
        ></v-slider>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn elevation="3" large block @click="state = 'read'">READ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapFields(["string", "state", "speed"]),
  },
};
</script>

<style>
</style>
