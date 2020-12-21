<template>
  <v-btn icon class="ml-4" @click="switchShowMode">
    <v-icon>mdi-brightness-4</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    switchShowMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      window.localStorage.removeItem("showMode");
      window.localStorage.setItem("showMode", this.$vuetify.theme.dark);
    },
  },
  created() {
    let showMode = window.localStorage.getItem("showMode");
    switch (showMode) {
      case "true":
        this.$vuetify.theme.dark = true;
        break;
      case "false":
        this.$vuetify.theme.dark = false;
        break;
      default:
        this.$vuetify.theme.dark = false;
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          this.$vuetify.theme.dark = true;
        }
        break;
    }

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
