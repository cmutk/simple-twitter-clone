<template>
  <label>
    <span :for="id">{{span}}</span>
    <input
      :id="id"
      :name="id"
      :type="type ? type :'text'"
      :value="value"
      @input="handleInput($event.target.value)"
      v-bind="$attrs"
      v-on="getListeners"
    />
  </label>
</template>

<script>
export default {
  name: "FormInput",
  inheritAttrs: false,
  props: {
    id: String,
    value: String,
    span: String,
    type: String,
  },
  computed: {
    getListeners() {
      const { input, ...rest } = this.$listeners;
      input ? console.log("its input", this.id) : console.log(rest);
      return {
        rest,
      };
    },
  },
  methods: {
    handleInput(value) {
      // console.log(ev.target.value);
      this.$emit("input", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
label {
  @apply flex flex-col border-b-2 border-gray-dark;
}
span {
  @apply px-2 pt-5px font-normal break-words text-base text-gray-dark;
}
input {
  @apply px-2 font-normal text-lg outline-none;
}
label,
input {
  @apply bg-gray-lightest;
}
label:focus-within {
  @apply border-blue;
}
label:focus-within > span {
  @apply text-blue;
}
</style>