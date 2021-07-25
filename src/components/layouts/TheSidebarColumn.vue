<template>
  <section name="sidebar-column" class="items-start self-stretch tw-0:hidden tw-1004:flex min-h-full mr-10px">
    <div class="w-350px h-full">
      <slot />
    </div>
  </section>
</template>
<script>
export default {
  name: "TheSidebarColumn",
};
</script>

<style lang="postcss" scoped>
</style>