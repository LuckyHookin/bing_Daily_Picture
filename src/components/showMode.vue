<template>
  <v-btn icon class="ml-4" @click="showMode = !showMode">
    <v-icon>mdi-brightness-4</v-icon>
  </v-btn>
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
      window.localStorage.removeItem("showMode");
      window.localStorage.setItem("showMode", newValue);
    },
  },
  created() {
    if (
      window.localStorage.getItem("showMode") === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.showMode = true;
    } else {
      this.showMode =
        window.localStorage.getItem("showMode") === "true" ? true : false;
    }
  },
};
</script>
