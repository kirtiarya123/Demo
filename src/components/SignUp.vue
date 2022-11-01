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
            <form v-on:submit.prevent="submit">
              <div><h2 style="text-align: center">Sign Up</h2></div>
              <br />

              <div class="mb-3">
                <label
                  for="exampleInputUsername"
                  placeholder="Username"
                  class="form-label"
                  >Username<span class="text-danger">*</span></label
                
                >

                <input
                  type="username"
                  class="form-control"
              
                placeholder="Username"
                  v-model.trim="$v.username.$model" :class="{'is-invalid': ($v.username.$error), 'is-valid':(!$v.username.$invalid)}"
                  id="exampleInputUsername"
                  aria-describedby="usernameHelp"
                />

                <div v-if="!$v.username.required" class="invalid-feedback">
                 The username is required.
                </div>
              </div>

              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  placeholder="Email"
                  class="form-label"
                  >Email address<span class="text-danger">*</span></label
                >

                <input
                  type="email"
                  class="form-control"
                 v-model.trim="$v.email.$model" :class="{'is-invalid': ($v.email.$error), 'is-valid':(!$v.email.$invalid)}"
                  placeholder="Email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div v-if="!$v.email.required" class="invalid-feedback">
                 The email is required.
                </div>

               
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
                   v-model.trim="$v.password.$model" :class="{'is-invalid': ($v.password.$error), 'is-valid':(!$v.password.$invalid)}"
                  placeholder="Password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                 <div v-if="!$v.password.required" class="invalid-feedback">
                 The password is required.
                </div>
              </div>

              <button
                v-on:click.prevent="Signup"
                class="btn btn-primary"
                type="sign up"
              >
                Sign Up
              </button>
            </form>
            <br />
          </div>
          <div class="text">
            Already have an account?
            <p><router-link to="/login">Login</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
export default {
  name: "Signup",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  validations: {
    username: { required },
    email:{required},
    password:{required},

  },
  methods: {
    

  
    async Signup() {
      let result = await axios.get(
        `http://localhost:3000/user?username=${this.username}&email=${this.email}&password=${this.password}`
      );
      console.log(result);
       console.log(result.data.username)
      if(result.data){
        this.$router.push("/");
      }
    },
      

    submit: function () {

      this.$v.$touch();
      if (this.$v.$pending || this.$v.$error) return;
      alert("Form Submit");
    },
    
  },
};
</script> 