<template>
  <v-app>
    <appBar></appBar>
    <v-main class="mainbg">
      <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import appBar from './components/appBar'
export default {
  components: {
    appBar,
  },
};
</script>