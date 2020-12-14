<template>
  <v-app-bar app flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="link in 5" :key="link" text>
        {{ link }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    <showMode></showMode>
    </v-container>
  </v-app-bar>
</template>

<script>
import showMode from './showMode'
export default {
    components: {
        showMode,
    },
};
</script>
