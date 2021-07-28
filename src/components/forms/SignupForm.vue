<template>
  <form action class="flex flex-col items-stretch w-full">
    <div class="px-4 py-3 flex-1">
      <div class="flex flex-row justify-between">
        <div class="flex-1 flex justify-start"></div>
        <div class="flex flex-grow flex-shrink justify-center">
          <f-icon :icon="['fab', 'twitter']" class="text-3xl text-blue" />
        </div>
        <div class="flex-1 flex justify-end">
          <div class="min-w-1/2">
            <base-button disabled class="btn primary disabled"
              >next</base-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-3 flex-1">
      <h1 class="font-bold text-2xl">Create your account</h1>
    </div>
    <div class="px-4 py-3 flex-1">
      <form-input id="A text input" span="Name" v-model="text" required />
    </div>
    <div class="px-4 py-3 flex-1">
      <form-input
        v-if="withEmail"
        id="An email input"
        type="email"
        span="Email"
        v-model="email"
        required
      />
      <form-input
        v-else
        id="A tel input"
        type="tel"
        span="Phone"
        v-model="tel"
        required
      />
    </div>
    <div class="px-4 py-3 flex-1">
      <base-button
        type="button"
        @handleBaseButtonClick="toggleSignupWith()"
        v-text="toggleButtonText"
        class="text-only"
      ></base-button>
    </div>
    <!-- <div class="px-4 py-3 flex-1">
      <form-input id="An Email input" type="email" span="Email" v-model="email" required />
    </div>-->

    <!-- <FormInput id="A date input" type="date" span="Some Date here" v-model="date" /> -->
  </form>
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
      withEmail: false,
      toggleButtonText: "Use Email Instead",
      text: "",
      email: "",
      tel: "",
      password: "",
      date: "",
    };
  },
  props: {},
  methods: {
    toggleSignupWith: function() {
      this.withEmail = !this.withEmail;
      this.toggleButtonText = this.withEmail
        ? "Use Phone Instead"
        : "Use Email Instead";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
