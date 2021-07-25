<template>
  <div class="flex flex-row justify-between py-9px">
    <div
      class="flex flex-row self-stretch items-center min-h-full tw-0:w-full tw-0:mx-4"
    >
      <div class="py-px tw-0:w-full">
        <base-button href="/login" class="btn primary  tw-0:min-h-30px"
          >Log in</base-button
        >
      </div>
      <div class="ml-10px tw-0:w-full">
        <base-button href="/" class="btn secondary tw-0:min-h-30px"
          >Sign up</base-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "../shared/BaseButton.vue";
export default {
  name: "TopBarSignUpBanner",
  components: {
    BaseButton,
  },
};
</script>
