<template>
  <div>
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
export default {
  name: "TheRootView",
};
</script>
<style lang="postcss" scoped>
</style>