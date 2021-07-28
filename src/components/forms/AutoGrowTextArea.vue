<template>
  <textarea
    :maxlength="maxlength"
    :placeholder="placeholder"
    class="resize-none overflow-hidden focus:outline-none h-auto w-full"
    :value="value"
    @input="resize"
  ></textarea>
</template>

<script>
export default {
  name: "AutoGrowTextArea",
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: "",
    },
  },

  methods: {
    resize(ev) {
      ev.target.style.height = "auto";
      ev.target.style.height = `${ev.target.scrollHeight}px`;
      this.$emit("input", ev.target.value);
    },
  },
};
</script>
<style lang="postcss" scoped></style>
