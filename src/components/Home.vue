<template>
  <div id="home">
    
    <Landpage />

    <About />

    <Products />

    <Contact />
  </div>
</template>

<script>
import Landpage from "../components/Landpage.vue";
import About from "../components/About.vue";
import Products from "../components/Products.vue";
import Contact from "../components/Contact.vue";

import "bootstrap";

export default {
  name: "Home",
  components: {
    Landpage,
    About,
    Products,
    Contact,
  
  },
};
</script>

<style>
.home {
  max-width: 100%;
}
</style>