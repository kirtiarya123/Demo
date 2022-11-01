<template>
  <nav class="navbar navbar-expand-lg navbar-lightskyblue">
    <div class="container-fluid">
      <nav class="navbar navbar-lightskyblue">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            style="
              color: #ffffff;
              font-weight: 900;
              font-size: 32px;
              font-family: 'Didact Gothic', sans-serif;
            "
            href="#"
          >
            <img src="../assets/logo-white.png" alt="" width="60" height="60" />
            Industrial Solution</a
          >
        </div>
      </nav>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
       <div v-if="show">
        <ul class="navbar-nav">
          <li class="nav-item">
           
            
        <router-link class="nav-link" style="color: #ffffff" to="/"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="color: #ffffff" to="/signup"
              >Sign Up</router-link
            >
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" style="color: #ffffff" to="/home"
              >Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #ffffff" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #ffffff" href="#">Our Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="color: #ffffff" href="#">Contact Us</a>
          </li>

        
          
          <li class="nav-item">
            <router-link class="nav-link" style="color: #ffffff" to="/billing"
              >Billing</router-link
            >
          </li>
            <button
            v-on:click="login"
            class="btn btn-#9dc7d3"
            style="background-color: #9dc7d3; color: #ffffff"
            type="Login"
          >
            Login
          </button>
        </ul>
      </div>
     
    </div>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return { show: false}
    
  },
  methods: {
    async login() {
       
      let result = await axios.post(
        `http://localhost:3000/user?username=${this.username}&email=${this.email}&password=${this.password}`
      );
      console.log(result);
      this.show = !this.show
       
      
    },
  },
};
</script> 


<style>
.navbar {
  background-color: #9dc7d3;
}
.navbar-brand {
  text-decoration-style: #ffffff;
}
</style>