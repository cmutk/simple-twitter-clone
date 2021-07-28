<template>
     <generic-card aria-label="signup" class="card sidebar bg-white">
        <h1 class="font-extrabold text-xl px-15px py-10px">New to Twitter?</h1>
        <p class="text-xs text-gray-dark px-15px">
          Sign up now to get your own personalized timeline
        </p>
        <div class="min-h-39px mx-10px my-15px flex flex-col">
          <base-button href="/signup" class="btn primary">Sign up</base-button>
        </div>
      </generic-card>
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
import GenericCard from "@/components/shared/TheGenericCard.vue";
export default {
    name: "TheSignUpCard",
    components: {
    BaseButton,
    GenericCard
  },
}
</script>
<style lang="postcss" scoped>

</style>