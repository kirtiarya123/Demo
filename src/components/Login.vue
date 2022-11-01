<template>
  <div>
    <div
      class="container"
      style="
        margin-top: 50px;
        margin-bottom: px;
        height: 500px;
        width: 500px;
        background-color: #9dc7d3;
      "
    >
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-7">
            <form>
              <div><h2 style="text-align: center">Login</h2></div>
              <br />
              <div class="mb-3">
                <label
                for="validationCustomEmail"
                 
                  placeholder="Enter Email address"
                  class="form-label"
                  >Email address <span class="text-danger">*</span></label
                >

                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Enter Email address"
                  id="validationCustomEmail"
                 aria-describedby="inputGroupPrepend" required
                />
                <div class="invalid-feedback">
                 Please choose a Correct email.
                </div>


                <div id="emailHelp" class="form-text"></div>
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  placeholder="Enter Password"
                  class="form-label"
                  >Password <span class="text-danger">*</span></label
                >
                <input
                  type="password"
                  v-model="password"
                  placeholder="Enter Password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button v-on:click.prevent="login()" class="btn btn-primary" type="Login">
                Login
              </button>
            </form>
          </div>
          <br>
          <div class="text"> Don't have an account?<p><router-link to="/signup">Signup now</router-link></p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      error:[],
      email: "",
      password: "",
    };
  },
 
  methods: {
    async login() {
      
         this.error=[];
      if (!this.email){
        this.error.push("User email is required");
      }
       if (!this.password){
        this.error.push("password is required");
      }
      console.warn("errors", this.error)
    
//     axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`).then((result) => {
// console.log(result);
// })
// .catch ((error) => {
// console.log(error)
// })
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      console.log(result.data.username);
      if(result.data){
        this.$router.push("/home");
      }
    },
  },
};
</script> 

 