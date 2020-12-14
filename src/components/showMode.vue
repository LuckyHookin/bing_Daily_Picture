<template>
<v-btn icon class="ml-4" @click="showMode=!showMode">
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
    },
  },
};
</script>
