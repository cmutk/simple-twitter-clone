<template>
  <main class="flex items-center justify-center tw-0:min-h-screen tw-500:min-h-1/2">
    <div class="flex flex-col items-center max-w-600px h-full w-full tw-0:-mt-40 tw-500:mt-20 tw-1004:mt-10">
      <f-icon :icon="['fab','twitter']" class="text-4xl text-blue" />
      <h1 class="font-bold text-2xl mt-30px mb-10px">Log in to Twitter</h1>
      <template v-if="isError">
        <span class="text-red-error">The username and password you entered did not match our records. Please double-check and try again.</span>
      </template>
      <login-form layout="vertical" />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/forms/LoginForm.vue";


export default {
  name: "Login",
  components: {
    LoginForm,
  },
  computed:{
    isError(){
    return this.$route.params.Error==="error"
    }
  }
};
</script>
