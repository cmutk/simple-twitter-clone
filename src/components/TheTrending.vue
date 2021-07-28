<template>
  <article :columnType="columnType">
    <list-card
      aria-label="Trends"
      :card-type="columnType === 'sidebar' ? 'card sidebar' : 'card'"
      :bg-color="columnType === 'sidebar' ? 'gray-bg' : 'white-bg'"
      header-text="Trends for you"
      :header-icon="columnType === 'sidebar' ? ['fas', 'cog'] : undefined"
      button-text="Show more"
      button-href="/login"
    >
      <template v-slot:content>
        <li
          v-for="trend in trends"
          :key="trend.keyword"
          :class="
            columnType === 'sidebar'
              ? 'hover:bg-gray-light'
              : 'hover:bg-blue hover:bg-opacity-10'
          "
          class="flex h-22 py-10px px-15px border-b border-gray-light cursor-pointer"
        >
          <router-link
            :to="{ path: '/search', query: { q: trend.keyword } }"
            class="w-full h-full"
            exact
          >
            <div class="flex-grow flex-shrink flex flex-col">
              <div class="inline-flex flex-row justify-between items-baseline">
                <!-- <span class="text-13px text-gray-dark">Türkiye tarihinde gündemde</span> -->
                <span
                  v-if="trend.genre"
                  class="inline-flex flex-row items-center text-13px font-normal text-gray-dark"
                >
                  <span>{{ trend.genre }}</span>
                  <span class="mx-1" v-html="middot"></span>
                  <span>Trending</span>
                </span>
                <span v-else class="text-13px font-normal text-gray-dark"
                  >Trending in {{ trend.location }}</span
                >

                <base-button class="with-icon text-13px">
                  <f-icon
                    :icon="['fas', 'chevron-down']"
                    class="text-gray"
                  ></f-icon>
                </base-button>
              </div>
              <span class="text-15px font-bold">{{ trend.keyword }}</span>
              <div class="mt-5px">
                <span class="text-13px font-normal text-gray-dark"
                  >{{ trend.count }} Tweets</span
                >
              </div>
            </div>
          </router-link>
        </li>
      </template>
    </list-card>
  </article>
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
import ListCard from "@/components/shared/TheListCard.vue";
export default {
  name: "TheTrending",
  components: {
    ListCard,
    BaseButton,
  },
  props: {
    columnType: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      middot: "&middot",
    };
  },
  computed: {
    trends() {
      return this.$store.getters.getTrendings;
    },
  },
};
</script>

<style lang="postcss" scoped></style>
