<template>
  <generic-main>
    <primary-column border-style="column" class="bg-gray-light">
      <the-top-nav>
        <template v-slot:top>
          <go-back-button />
          <the-search-bar class="tw-0:flex tw-500:hidden" />
          <div class="flex-col tw-0:hidden tw-500:flex">
            <h1 class="font-extrabold text-19px">{{ TheUser.alias }}</h1>
            <p class="text-13px text-gray-dark">{{ TweetCount }} Tweets</p>
          </div>
        </template>
        <template v-if="!isLoggedIn" v-slot:bottom>
          <top-bar-sign-up-banner class="tw-0:flex tw-500:hidden" />
        </template>
      </the-top-nav>
      <div class="flex flex-col">
        <div>
          <img
            v-bind:src="
              'https://via.placeholder.com/1080x360?text=' + TheUser.alias
            "
            alt="background image"
          />
        </div>
        <div class="flex flex-col pb-15px px-15px pt-10px bg-white">
          <div class="flex flex-row justify-between">
            <div
              class="-ml-1 -mb-1 -mt-15% w-1/4 border-4 border-white rounded-full flex"
            >
              <img
                :src="TheUser.avatar"
                alt="Profile İmage"
                class="h-full w-full rounded-full"
              />
            </div>
            <div class="h-39px mb-10px">
              <base-button class="btn secondary">follow</base-button>
            </div>
          </div>
          <h1 class="font-extrabold text-19px">{{ TheUser.alias }}</h1>
          <p class="text-15px text-gray-dark mb-10px">{{ TheUser.name }}</p>
          <p class="mb-10px">{{ TheUser.info }}</p>
          <div class="flex flex-row items-center mb-10px text-gray-dark">
            <div class="flex flex-row mr-10px">
              <f-icon :icon="['fas', 'map-marker-alt']" class="h-1.5em mr-2" />
              <span>{{ TheUser.location }}</span>
            </div>
            <div class="flex flex-row items-center">
              <f-icon :icon="['far', 'calendar-alt']" class="h-1.5em mr-2" />
              <span>{{ TheUser.joinedAt | formatDate }}</span>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-row justify-between items-center mr-20px">
              <span class="font-bold">{{ TheUser.following }}</span>
              <span class="text-15px text-gray-dark ml-5px">Following</span>
            </div>
            <div class="flex flex-row justify-between items-center">
              <span class="font-bold">{{ TheUser.followers }}</span>
              <span class="text-15px text-gray-dark ml-5px">Followers</span>
            </div>
            <p class="text-15px"></p>
          </div>
        </div>
      </div>
      <div class="h-54px">
        <div
          class="flex flex-row justify-between items-center h-full w-full text-15px"
        >
          <base-button class="btn tab">Tweets</base-button>
          <base-button class="btn tab">Tweets & replies</base-button>
          <base-button class="btn tab">Media</base-button>
          <base-button class="btn tab">Likes</base-button>
        </div>
      </div>
      <the-tweets></the-tweets>
    </primary-column>
    <sidebar-column class="pb-59px">
      <div
        class="flex-grow flex-shrink justify-center content-center mx-5px my-10px"
      >
        <search-box />
      </div>
      <signup-card />
      <you-might-like />
      <the-trending column-type="sidebar"></the-trending>
    </sidebar-column>
    <sign-up-banner v-if="!isLoggedIn && windowWidth > 499" />
  </generic-main>
</template>

<script>
// @ is an alias to /src
import moment from "moment";
import GenericMain from "@/components/layouts/TheGenericMain.vue";
import PrimaryColumn from "@/components/layouts/ThePrimaryColumn.vue";
import SidebarColumn from "@/components/layouts/TheSidebarColumn.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import GoBackButton from "@/components/shared/GoBackButton.vue";
import SearchBox from "@/components/TheSearchBox.vue";
import SignupCard from "@/components/sidebarCards/TheSignUpCard.vue";
import YouMightLike from "@/components/sidebarCards/TheYouMightLike.vue";
import TheTrending from "@/components/TheTrending.vue";
import TheTweets from "@/components/TheTweets.vue";
import TheTopNav from "./TheTopNav.vue";
import TheSearchBar from "./TheSearchBar.vue";
import TopBarSignUpBanner from "./layouts/TopBarSignUpBanner.vue";
import SignUpBanner from "./layouts/TheSignUpBanner.vue";

export default {
  name: "TheUserDetails",
  components: {
    GenericMain,
    PrimaryColumn,
    SidebarColumn,
    BaseButton,
    GoBackButton,
    SearchBox,
    SignupCard,
    YouMightLike,
    TheTrending,
    TheTweets,
    TheTopNav,
    TheSearchBar,
    TopBarSignUpBanner,
    SignUpBanner,
  },

  data() {
    return {
      userName: this.$route.params.user,
      windowWidth: 0,
    };
  },
  created() {
    const uri = this.$data.userName;
    this.$store.dispatch("fetchUserStatus", uri);
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.$data.windowWidth = window.innerWidth;
    },
  },
  filters: {
    formatDate: function(date) {
      return moment(date).format("MMMM YYYY");
    },
  },
  computed: {
    TheUser() {
      return this.$store.getters.getUser;
    },
    isLoggedIn() {
      return this.$store.getters.getLoggedUser;
    },
    TweetCount() {
      return this.$store.getters.getTweetsLength;
    },
  },
};
</script>

<style lang="postcss" scoped></style>
