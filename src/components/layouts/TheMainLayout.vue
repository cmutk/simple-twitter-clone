<template>
  <div class="flex flex-row w-full">
    <generic-header>
      <slot name="main-header-column"></slot>
    </generic-header>
    <main class="flex-grow flex-shrink tw-0:w-full tw-500:w-auto">
      <slot name="main-content"></slot>
    </main>
  </div>
</template>

<script>
import GenericHeader from "@/components/layouts/TheGenericHeader.vue";

export default {
  name: "TheMainLayout",
  components: {
    GenericHeader,
  },
};
</script>
<style lang="postcss" scoped>
.svg-inline--fa.fa-w-16 {
  @apply w-auto;
}
</style>
