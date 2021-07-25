<template>
  <div class="flex flex-col w-full">
    <div :aria-label="ariaLabel" role="region" :class="baseClass">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "TheGenericCard",
  props: {
    ariaLabel: {
      type: String,
      required: false,
    },
    baseClass: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
.none {
  @apply flex flex-col justify-between content-between border-none;
}
.column {
  @apply flex flex-col justify-between content-between border border-gray-light;
}
.card {
  @apply flex flex-col justify-between content-between mt-15px  border-t border-b border-gray-light;
}
.sidebar {
  @apply border-r border-l rounded-xl;
}
</style>
