<template>
<div class="w-full">

  <form v-if="layout === 'vertical'" class="flex flex-col items-stretch w-full">
    <div class="px-4 py-3 flex-1">
      <form-input id="A text input" span="Phone, email or username" v-model="username" required />
    </div>
    <div class="px-4 py-3 flex-1">
      <form-input
        id="A password input"
        type="password"
        span="Password"
        v-model="password"
        required
      />
    </div>
    <div class="px-4 py-3 flex-1 h-16">
      <base-button subType="button" :disabled= isDisabled class="btn primary disabled" @click="login" >Login</base-button>
    </div>
    <div class="px-4 py-3 flex flex-1 h-16 justify-center items-center">
      <base-button href="/" class="text-only">Forgot password</base-button>
      <span>
        <span>.</span>
      </span>
      <base-button href="/signup" class="text-only">Sign up for</base-button>
    </div>
  </form>

  <form v-else-if="layout === 'horizontal'" class="w-full flex">
   <div class="w-full flex flex-row justify-around items-stretch">
       <div class="flex flex-shrink items-center w-225px px-4">
          <form-input
                id="A text input"
                span="Phone, email or username"
                v-model="username"
                required
              />
        </div>
        <div class="flex flex-col flex-shrink w-225px px-4">
          <form-input
                id="A password input"
                type="password"
                span="Password"
                v-model="password"
                required
              />
          <base-button href="/" class="text-only text-sm h-0 mt-px">Forgot password?</base-button>
        </div>
        <div class="flex items-center self-center max-h-39px pr-4">
          <base-button subType="button" @click="login" class="btn secondary">Log in</base-button>
        </div>
      </div>
  </form>
</div>
  
</template>

<script>
import FormInput from "@/components/forms/FormInput.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
export default {
  name: "LoginForm",
  components: {
    FormInput,
    BaseButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  props: ['layout'],
  methods: {
    login: function () {
      console.log("you have clicked me", this.username);
      this.$store.dispatch("fetchAndCheckAcc", {
        username: this.username,
        password: this.password,
      });
    },
  },
  computed:{
    isDisabled(){
      console.log(this.username);
      const result = (this.username.length>0 && this.password.length>0)?false:true;
    return result;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

