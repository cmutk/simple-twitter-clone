<template>
  <generic-card :aria-label="ariaLabel" :class="[cardType, bgColor]">
    <div
      class="py-10px pl-15px pr-9px border-b border-gray-light flex flex-row justify-between items-center"
    >
      <h1 class="font-extrabold text-19px">{{ headerText }}</h1>
      <base-button v-if="headerIcon" class="with-icon">
        <f-icon :icon="headerIcon" class="text-blue"></f-icon>
      </base-button>
    </div>

    <ul>
      <slot name="content"></slot>
    </ul>
    <div
      v-if="buttonHref"
      class="button-container"
      :class="cardType === 'card sidebar' ? ' rounded-b-xl ' : ''"
    >
      <base-button :href="buttonHref" class="text-no-hover">{{
        buttonText
      }}</base-button>
    </div>
  </generic-card>
</template>
<script>
import GenericCard from "@/components/shared/TheGenericCard.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
export default {
  name: "TheListCard",
  components: {
    BaseButton,
    GenericCard,
  },
  props: {
    ariaLabel: {
      type: String,
      required: false,
    },
    cardType: {
      type: String,
      default: null,
    },
    bgColor: {
      type: String,
      default: null,
    },
    contentClass: {
      type: String,
      default: null,
    },
    buttonHref: {
      type: String,
      default: null,
    },
    buttonText: {
      type: String,
      default: null,
    },
    headerText: {
      type: String,
      default: null,
    },
    headerIcon: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
.button-container {
  @apply py-10px px-15px cursor-pointer;
}
.white-bg {
  @apply bg-white;
}
.white-bg .button-container:hover {
  @apply bg-blue bg-opacity-10;
}
.gray-bg {
  @apply bg-gray-lightest;
}
.gray-bg .button-container:hover {
  @apply bg-gray-light;
}
</style>
