<template>
  <v-switch
    class="ml-4"
    hide-details
    v-model="showMode"
    inset
  >
    <template v-slot:label><v-icon>mdi-brightness-4</v-icon></template>
  </v-switch>
</template>

<script>
export default {
  data() {
    return {
      showMode: false,
    };
  },
  watch: {
    showMode(newValue) {
      this.$vuetify.theme.dark = newValue;
    },
  },
};
</script>
