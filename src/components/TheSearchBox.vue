<template>
  <div class="background-shape">
    <label>
      <div class="icon">
        <f-icon :icon="['fas', 'search']" />
      </div>
      <input type="search" placeholder="Search Twitter" />
    </label>
  </div>
</template>

<script>
export default {
  name: "TheSearchBox",
  inheritAttrs: false,
  //   props: {

  //   },
  //   computed: {
  //     getListeners() {
  //       const { input, ...rest } = this.$listeners;
  //       input ? console.log("its input", this.id) : console.log(rest);
  //       return {
  //         rest
  //       };
  //     }
  //   },
  //   methods: {
  //     handleInput(ev) {
  //       console.log(ev.target.value);
  //       this.$emit("change", ev.target.value);
  //     }
  //   }
};
</script>
<style scoped lang="postcss">
.background-shape {
  @apply flex items-center border border-white rounded-full  bg-gray-light max-h-33px;
}

.background-shape:focus-within {
  @apply bg-white border border-blue;
}

label {
  @apply cursor-text  flex flex-row items-center justify-center w-full bg-transparent;
}

label:focus-within > .icon {
  @apply text-blue;
}
.icon {
  @apply cursor-default flex justify-center items-center pl-15px text-gray-dark;
}
input {
  @apply outline-none w-full text-15px text-left p-10px rounded-r-full bg-transparent;
}
</style>
