<template>
  <generic-main>
    <primary-column border-style="column" class="bg-gray-light">
      <header
        class="flex flex-col sticky bg-white border-b border-gray-light top-0 z-10"
      >
        <div class="h-54px">
          <div
            class="flex flex-row justify-center items-center w-full h-54px px-15px"
          >
            <go-back-button></go-back-button>
            <div
              class="flex-grow flex-shrink justify-center content-center mx-5px my-10px"
            >
              <search-box />
            </div>
            <div class="ml-20px">
              <base-button class="with-icon hw-39px">
                <f-icon :icon="['fas', 'ellipsis-h']" class="h-1.5em" />
              </base-button>
            </div>
          </div>
        </div>
        <div class="h-54px">
          <div class="flex flex-row justify-between items-center h-full w-full">
            <base-button class="btn tab">Top</base-button>
            <base-button class="btn tab">Latest</base-button>
            <base-button class="btn tab">People</base-button>
            <base-button class="btn tab">Photos</base-button>
            <base-button class="btn tab">Videos</base-button>
          </div>
        </div>
      </header>
      <the-tweets></the-tweets>
    </primary-column>
    <sidebar-column class="pb-59px">
      <signup-card v-if="!isLoggedIn" />
      <search-filters />
      <the-trending column-type="sidebar"></the-trending>
    </sidebar-column>
    <sign-up-banner v-if="!isLoggedIn" />
  </generic-main>
</template>

<script>
// @ is an alias to /src
import GenericMain from "@/components/layouts/TheGenericMain.vue";
import PrimaryColumn from "@/components/layouts/ThePrimaryColumn.vue";
import SidebarColumn from "@/components/layouts/TheSidebarColumn.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import GoBackButton from "@/components/shared/GoBackButton.vue";
import SearchBox from "@/components/TheSearchBox.vue";
import SignupCard from "@/components/sidebarCards/TheSignUpCard.vue";
import SignUpBanner from "@/components/layouts/TheSignUpBanner.vue";
import SearchFilters from "@/components/sidebarCards/TheSearchFilters.vue";
import TheTrending from "@/components/TheTrending.vue";
import TheTweets from "@/components/TheTweets.vue";

export default {
  name: "TheSearch",
  components: {
    GenericMain,
    PrimaryColumn,
    SidebarColumn,
    BaseButton,
    GoBackButton,
    SearchBox,
    SignupCard,
    SearchFilters,
    TheTrending,
    TheTweets,
    SignUpBanner,
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },

  created() {
    const uri = this.$props.query;
    const queryEncoded = encodeURIComponent(uri);
    this.$store.dispatch("fetchSearchResults", queryEncoded);
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style lang="postcss" scoped></style>
