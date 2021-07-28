<template>
  <div id="app" class="box-border font-sans tw-0:text-sm tw-500:text-base">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchTrendings");
  },
};
</script>
<style></style>
