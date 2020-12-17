<template>
<v-container>
        <div>

              <v-btn dark color="primary" small class="mr-2" @click="pict.url"
                ><v-icon color="white" left>mdi-file-download</v-icon
                >全高清下载</v-btn
              >
              
              <v-btn dark color="primary" small class="ml-2" @click="link(pict.uhdurl)"
                ><v-icon color="white" left>mdi-file-download</v-icon
                >超高清下载</v-btn
              >
          </div>
</v-container>
</template>

<script>
    export default {
        
    }
</script>

