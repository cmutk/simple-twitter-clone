<template>
  <section name="primary-column" class="w-full h-full mx-0 tw-500:max-w-600px">
    <generic-card :class="borderStyle">
      <slot />
    </generic-card>
  </section>
</template>
<script>
import GenericCard from "@/components/shared/TheGenericCard.vue";
export default {
  name: "ThePrimaryColumn",
  components: {
    GenericCard,
  },
  props: {
    borderStyle: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>