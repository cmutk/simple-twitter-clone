<template>
  <div class="flex flex-wrap justify-center content-center h-screen bg-black bg-opacity-40">
    <div class="bg-white w-auto h-auto max-w-3/4 min-h-1/4 min-w-600px min-h-3/4 rounded-xl p-4">
      <signup-form />
    </div>
  </div>
</template>
<script>
// this might be modal big and we can use seperate modal for create tweets
// import FromInput from "@/components/LoginSignupInput.vue";
import SignupForm from "@/components/forms/SignupForm.vue";
export default {
  name: "Signup",
  components: {
    SignupForm,
    // FromInput,
  },
};
</script>