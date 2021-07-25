<template>
  <generic-main>
    <primary-column border-style="column" class="bg-gray-light">
      <header class="flex flex-col sticky bg-white border-b border-gray-light top-0 z-10">
        <div class="flex flex-row justify-start items-center w-full px-15px pb-10px">
          <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between w-full mt-15px pb-10px border-b border-gray">
              <h1 class="font-extrabold text-19px">Home</h1>
              <f-icon :icon="['fas', 'feather-alt']" class="min-w-36px text-blue" />
            </div>
            <div class="flex flex-row justify-between w-full mt-10px">
              <div class="flex mr-10px h-49px w-49px text-gray">
                <f-icon :icon="['fas', 'user-circle']" class="min-w-36px h-full w-full" />
              </div>
              <div class="inline-flex flex-col w-full">
                <div class="h-auto mt-10px overflow-y-visible">
                  <auto-grow-text-area
                    v-model.trim="newTweet"
                    maxlength="150"
                    placeholder="What's happening"
                  
                  ></auto-grow-text-area>
                </div>

                <div class="flex flex-row justify-between items-center">
                  <div
                    class="pt-5px pb-5px h-49px flex flex-row justify-between items-center text-blue"
                  >
                    <base-button class="with-icon hw-39px mr-5px">
                      <f-icon :icon="['far', 'image']"></f-icon>
                    </base-button>
                    <base-button class="with-icon mr-5px">
                      <f-icon :icon="['fas', 'film']"></f-icon>
                    </base-button>
                    <base-button class="with-icon mr-5px">
                      <f-icon :icon="['fas', 'poll-h']"></f-icon>
                    </base-button>
                    <base-button class="with-icon mr-5px">
                      <f-icon :icon="['far', 'smile']"></f-icon>
                    </base-button>
                  </div>
                  <div class="pt-5px pb-5px flex flex-row justify-between items-center">
                    <base-button class="with-icon mr-5px">
                      <f-icon :icon="['far', 'circle']" class="text-gray"></f-icon>
                    </base-button>
                    <span class="text-23px text-gray">|</span>
                    <base-button class="with-icon mr-5px">
                      <f-icon :icon="['fas', 'plus']"></f-icon>
                    </base-button>
                    <div class="h-39px">
                      <base-button @click="postTweet" class="btn primary">Tweet</base-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <the-tweets></the-tweets>
    </primary-column>
    <sidebar-column class="pb-59px">
      <div class="flex-grow flex-shrink justify-center content-center mx-5px my-10px">
        <search-box />
      </div>
      <list-card
        aria-label="Search-filters"
        :card-type="'card sidebar'"
        :bg-color="'white-bg'"
        header-text="Search filters"
        button-text="Advanced search"
        button-href="/login"
      >
        <template v-slot:content>
          <li class="flex flex-col py-10px px-15px border-b border-gray-light">
            <h2 class="text-15px font-bold">People</h2>
            <div>
              <label class="flex flex-row justify-between items-center cursor-pointer">
                <span>From anyone</span>
                <base-button class="with-icon hw-39px">
                  <f-icon :icon="['fas', 'check-circle']" class="h-1.5em" />
                </base-button>
              </label>
              <label class="flex flex-row justify-between items-center cursor-pointer">
                <span>People you follow</span>
                <base-button class="with-icon hw-39px">
                  <f-icon :icon="['far', 'circle']" class="h-1.5em" />
                </base-button>
              </label>
            </div>
          </li>
          <li class="flex flex-col py-10px px-15px border-b border-gray-light">
            <h2 class="text-15px font-bold">Location</h2>
            <div>
              <label class="flex flex-row justify-between items-center cursor-pointer">
                <span>Anywhere</span>
                <base-button class="with-icon hw-39px">
                  <f-icon :icon="['fas', 'check-circle']" class="h-1.5em" />
                </base-button>
              </label>
              <label class="flex flex-row justify-between items-center cursor-pointer">
                <span>Near you</span>
                <base-button class="with-icon hw-39px">
                  <f-icon :icon="['far', 'circle']" class="h-1.5em" />
                </base-button>
              </label>
            </div>
          </li>
        </template>
      </list-card>
      <the-trending column-type="sidebar"></the-trending>
    </sidebar-column>
  </generic-main>
</template>

<script>
// @ is an alias to /src
import moment from "moment";
import GenericMain from "@/components/layouts/TheGenericMain.vue";
import PrimaryColumn from "@/components/layouts/ThePrimaryColumn.vue";
import SidebarColumn from "@/components/layouts/TheSidebarColumn.vue";
import AutoGrowTextArea from "@/components/forms/AutoGrowTextArea.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import SearchBox from "@/components/TheSearchBox.vue";
import ListCard from "@/components/shared/TheListCard.vue";
import TheTrending from "@/components/TheTrending.vue";
import TheTweets from "@/components/TheTweets.vue";

export default {
  name: "Home",
  components: {
    GenericMain,
    PrimaryColumn,
    SidebarColumn,
    BaseButton,
    SearchBox,
    AutoGrowTextArea,
    ListCard,
    TheTrending,
    TheTweets,
  },

  data() {
    return {
      newTweet: "",
    };
  },
    created() {
      const uri = this.$store.getters.getLoggedUser[0].name;
      this.$store.dispatch("fetchUserStatus", uri);
    },
  filters: {
    formatDate: function (date) {
      return moment(date).format("MMMM YYYY");
    },
  },
  methods: {
    postTweet() {
      this.newTweet.length > 0&&this.$store.dispatch("postNewStatus", this.newTweet)
      this.newTweet="";   
    },

  },
};
</script>

<style lang="postcss" scoped></style>
