<template>
  <div class="self-stretch flex items-center min-w-59px">
     <router-link to="/" class="flex py-1" exact>
          <f-icon :icon="['fab', 'twitter']" class="min-w-36px h-7 text-blue" />
      </router-link>
  </div>
</template>
<script>

export default {
  name: "HomeButton",
};
</script>