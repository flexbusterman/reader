<template>
  <v-card height="100%">
    <v-form ref="form" @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-textarea v-model="string">
              <template v-slot:label>
                <div>Type or paste text here</div>
              </template>
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  computed: {
    ...mapFields(["string"]),
  },
};
</script>

<style>
</style>
