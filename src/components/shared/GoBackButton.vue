<template>
  <div class="self-stretch flex items-center min-w-59px">
    <base-button @click="goBack" class="with-icon hw-39px">
      <f-icon :icon="['fas', 'arrow-left']" class="h-1.5em" />
    </base-button>
  </div>
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
export default {
  name: "TheGoBackButton",
  components: {
    BaseButton,
  },
  methods: {
    goBack() {
      console.log("you clicked me");
      return this.$router.go(-1);
    },
  },
};
</script>
