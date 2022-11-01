<template>
  <div id="app">
    <Navbar />

  
    
          <div>
            <router-view ></router-view>
          </div>
        </div>
   
</template>

<script>
import Navbar from "./components/Navbar.vue";

import "bootstrap";

export default {
  name: "App",
  components: {
    Navbar,
    
  },
};
</script>

<style>
.app {
  max-width: 100%;
}
</style>

