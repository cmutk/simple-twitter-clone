<template>
  <header
    class="flex flex-col sticky bg-white border-b border-gray-light top-0 z-10"
  >
    <div class="h-54px">
      <div
        class="flex flex-row justify-start items-center w-full tw-0:h-50px tw-500:h-54px px-15px"
      >
        <slot name="top"></slot>
      </div>
    </div>
    <slot name="bottom"></slot>
  </header>
</template>
<script>
export default {
  name: "TheTopNav",
};
</script>
<style lang="postcss" scoped></style>
