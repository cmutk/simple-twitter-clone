<template>
  <generic-main>
    <primary-column border-style="column" class="bg-gray-light">
      <the-top-nav>
        <template v-slot:top>
          <go-back-button/>
          <the-search-bar class="tw-0:flex tw-500:hidden"/>
            <div class="flex-col tw-0:hidden tw-500:flex" >
           <h1 class="font-extrabold text-19px">Tweet</h1>
            </div>
        </template>
        <template v-if="!isLoggedIn" v-slot:bottom>
        <top-bar-sign-up-banner class="tw-0:flex tw-500:hidden"/>
        </template>          
      </the-top-nav>
      <li class="flex py-10px px-15px bg-white border-b border-gray-light cursor-pointer">
        <div class="flex-shrink flex flex-col flex-1">
          <div class="flex flex-row mb-5px">
            <div class="flex mr-10px h-49px w-49px">
              <img :src="selectedTweet.user.avatar" alt="img was here" class="rounded-full" />
            </div>
            <div class="inline-flex flex-grow flex-row justify-between items-baseline">
              <span>
                <router-link
                  :to="{
                        name: 'UserDetails',
                        params: { user: selectedTweet.user.name },
                      }"
                  class="tweet-username inline-flex flex-col font-normal"
                >
                  <span class="text-15px font-bold">
                    {{
                    selectedTweet.user.alias
                    }}
                  </span>
                  <span class="font-normal text-gray-dark">@{{ selectedTweet.user.name }}</span>
                </router-link>
              </span>

              <base-button class="with-icon text-13px">
                <f-icon :icon="['fas', 'chevron-down']" class="text-gray"></f-icon>
              </base-button>
            </div>
          </div>

          <span class="text-23px mt-10px">{{ selectedTweet.title }}</span>
          <div class="flex flex-row items-center my-15px">
            <span class="text-gray-dark">
              {{
              selectedTweet.createdAt | formatTime
              }}
            </span>
            <span class="mx-1" v-html="middot"></span>
            <span class="text-gray-dark">
              {{
              selectedTweet.createdAt | formatDate
              }}
            </span>
          </div>
          <div
            class="flex flex-row items-center px-5px py-15px border-t border-gray-light text-15px"
          >
            <span class="mr-20px">
              <span class="font-bold mr-5px">{{selectedTweet.replies.length}}</span>
              <span class="text-gray-dark">Replies</span>
            </span>
            <span class="mr-20px">
              <span class="font-bold mr-5px">{{selectedTweet.retweets}}</span>
              <span class="text-gray-dark">Retweets</span>
            </span>
            <span class="mr-20px">
              <span class="font-bold mr-5px">{{selectedTweet.likes}}</span>
              <span class="text-gray-dark">Likes</span>
            </span>
          </div>
          <div
            class="flex flex-row justify-between items-center h-49px text-23px pt-5px pb-5px border-t border-gray-light"
          >
            <base-button class="with-icon hw-49px">
              <f-icon :icon="['far', 'comment']" class="text-gray-dark"></f-icon>
            </base-button>
            <base-button class="with-icon">
              <f-icon :icon="['fas', 'retweet']" class="text-gray-dark"></f-icon>
            </base-button>
            <base-button class="with-icon">
              <f-icon :icon="['far', 'heart']" class="text-gray-dark"></f-icon>
            </base-button>
            <base-button class="with-icon">
              <f-icon :icon="['far', 'share-square']" class="text-gray-dark"></f-icon>
            </base-button>
          </div>
        </div>
      </li>

      <the-tweets></the-tweets>
    </primary-column>
    <sidebar-column class="pb-59px">
      <div class="flex-grow flex-shrink justify-center content-center mx-5px my-10px">
        <search-box />
      </div>
        <signup-card/>
        <relevant-people/>
      <the-trending column-type="sidebar"></the-trending>
    </sidebar-column>
   <sign-up-banner v-if="!isLoggedIn && windowWidth>499"/>
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
import RelevantPeople from "@/components/sidebarCards/TheRelevantPeople.vue";
import TheTrending from "@/components/TheTrending.vue";
import TheTweets from "@/components/TheTweets.vue";
import TheTopNav from './TheTopNav.vue';
import TheSearchBar from './TheSearchBar.vue';
import TopBarSignUpBanner from './layouts/TopBarSignUpBanner.vue';
import SignUpBanner from './layouts/TheSignUpBanner.vue';

export default {
  name: "TheTweetDetails",
  components: {
    GenericMain,
    PrimaryColumn,
    SidebarColumn,
    BaseButton,
    GoBackButton,
    SearchBox,
    SignupCard,
    RelevantPeople,
    TheTrending,
    TheTweets,
    TheTopNav,
    TheSearchBar,
    TopBarSignUpBanner,
    SignUpBanner
  },

  data() {
    return {
      middot: "&middot",
      userName: this.$route.params.user,
      windowWidth : 0,
    };
  },
  created() {
    window.addEventListener('resize',this.handleResize);
  },
  destroyed(){
    window.removeEventListener('resize',this.handleResize);
  },
  methods:{
    handleResize(){
      this.$data.windowWidth=window.innerWidth;
    }
  },
  filters: {
    formatTime: function (date) {
      return moment(date).format("h:mm A");
    },
    formatDate: function (date) {
      return moment(date).format("MMM D, YYYY");
    },
  },
  computed: {
    selectedTweet() {
      console.log(this.$store.getters.getSelectedTweet);
      return this.$store.getters.getSelectedTweet;
    },
    isLoggedIn(){
      return this.$store.getters.getLoggedUser
    },
  },
};
</script>

<style lang="postcss" scoped></style>
