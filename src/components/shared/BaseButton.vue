<template>
  <component
    :is="elementType"
    :type="subType ? subType : ''"
    :href="href"
    :class="baseClass"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    href: {
      elementType: String,
      default: null,
    },
    baseClass: {
      elementType: String,
      default: null,
    },
    subType: {
      elementType: String,
      default: null,
    },
  },
  computed: {
    elementType() {
      return this.href ? "a" : "button";
    },
  },
};
</script>

<style scoped lang="postcss">
.btn,
.with-icons,
.text-only {
  @apply outline-none;
}
.disabled {
  @apply opacity-50 cursor-default;
}
.btn {
  @apply flex-1 flex justify-center items-center w-full h-full px-1em font-bold;
}
.tab {
  @apply bg-white text-gray-dark border-b-2 border-white;
}
.tab:hover {
  @apply bg-blue bg-opacity-10 text-blue;
}
.tab:focus {
  @apply text-blue border-blue;
}
.primary {
  @apply bg-blue text-white border-blue border rounded-full;
}
.primary:hover {
  @apply bg-blue-dark border-blue-dark;
}
.primary.reverse {
  @apply border-white;
}
.primary.reverse:hover {
  @apply bg-white bg-opacity-10;
}
.secondary {
  @apply bg-white text-blue border-blue border rounded-full;
}
.secondary.reverse {
  @apply border-white;
}
.secondary.reverse:hover {
  @apply bg-gray-lighter;
}
.secondary:hover,
.with-icon:hover {
  @apply bg-blue  bg-opacity-10;
}
.with-icon:hover > * {
  @apply text-blue;
}
a:hover > .nav-button,
.nav-button:hover {
  @apply bg-blue bg-opacity-10 text-blue;
}
.with-icon {
  @apply flex justify-center items-center p-6px  text-blue rounded-full;
}
.hw-49px {
  @apply h-49px w-49px;
}
.hw-39px {
  @apply h-39px w-39px;
}
.hw-36px {
  @apply h-36px w-36px;
}

.nav-button {
  @apply inline-flex justify-start items-center p-10px rounded-full;
}
.text-only {
  @apply px-2 font-normal text-blue;
}
.text-only:hover {
  @apply underline;
}
.text-no-hover {
  @apply font-normal text-blue outline-none;
}
</style>
