<template>
  <section aria-label="content" class="flex-shrink flex-grow justify-start">
    <div class="flex-shrink tw-1004:w-990px">
      <div
        class="flex flex-row justify-between items-stretch h-full min-h-full"
      >
        <slot />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "TheGenericMain",
};
</script>
