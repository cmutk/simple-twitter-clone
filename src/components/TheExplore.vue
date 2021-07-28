<template>
  <generic-main>
    <primary-column border-style="column" class="bg-gray-light">
      <the-top-nav>
        <template v-slot:top>
          <home-button class="tw-0:flex tw-500:hidden" />
          <the-search-bar />
        </template>
      </the-top-nav>
      <the-trending column-type="primary"></the-trending>
      <the-events column-type="primary"></the-events>
    </primary-column>
    <sidebar-column class="pb-59px">
      <signup-card v-if="!isLoggedIn" />
    </sidebar-column>
    <sign-up-banner v-if="!isLoggedIn" />
  </generic-main>
</template>

<script>
// @ is an alias to /src
import GenericMain from "@/components/layouts/TheGenericMain.vue";
import PrimaryColumn from "@/components/layouts/ThePrimaryColumn.vue";
import SidebarColumn from "@/components/layouts/TheSidebarColumn.vue";
// import BaseButton from "@/components/shared/BaseButton.vue";
// import SearchBox from "@/components/TheSearchBox.vue";
// import GoBackButton from './shared/GoBackButton.vue';
import SignupCard from "@/components/sidebarCards/TheSignUpCard.vue";
import TheTrending from "@/components/TheTrending.vue";
import TheEvents from "@/components/TheEvents.vue";
import TheTopNav from "./TheTopNav.vue";
import TheSearchBar from "./TheSearchBar.vue";
import HomeButton from "./shared/HomeButton.vue";
import SignUpBanner from "@/components/layouts/TheSignUpBanner.vue";

export default {
  name: "TheExplore",
  components: {
    GenericMain,
    PrimaryColumn,
    SidebarColumn,
    // BaseButton,
    // GoBackButton,
    // SearchBox,
    SignupCard,
    TheTrending,
    TheEvents,
    TheTopNav,
    TheSearchBar,
    HomeButton,
    SignUpBanner,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>

<style lang="postcss" scoped></style>
