<template>
  <NavApp/>  
  <div class="containerGrid">
    <router-view></router-view>
  </div>
</template>
<script>
// importar style grid personal
import "@/assets/style/normalize.css";
import "@/assets/style/utils/grid.scss";
import "@/assets/style/style.scss";

import NavApp from './components/NavApp.vue'



export default {
  name: "App",
  components:{
    NavApp
  },
  setup() {
    return {

    };
  },
};

</script>

<style lang="scss">
</style>
