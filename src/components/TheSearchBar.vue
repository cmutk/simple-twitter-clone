<template>
  <div class="flex flex-row items-center flex-grow">
    <div
      class="flex-grow flex-shrink justify-center content-center mx-5px my-10px"
    >
      <the-search-box />
    </div>
    <div class="ml-20px">
      <base-button class="with-icon hw-39px">
        <f-icon :icon="['fas', 'cog']" class="h-1.5em" />
      </base-button>
    </div>
  </div>
</template>
<script>
import TheSearchBox from "./TheSearchBox.vue";
import BaseButton from "./shared/BaseButton.vue";
export default {
  name: "TheSearchBar",
  components: {
    TheSearchBox,
    BaseButton,
  },
};
</script>
<style lang="postcss" scoped></style>
