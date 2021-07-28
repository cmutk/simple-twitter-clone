<template>
  <article>
    <ul class="bg-white">
      <template>
        <li
          v-for="tweet of tweets"
          :key="tweet.id"
          :class="
            columnType === 'sidebar'
              ? 'hover:bg-gray-light'
              : 'hover:bg-blue hover:bg-opacity-10'
          "
          class="flex py-10px px-15px border-b border-gray-light cursor-pointer"
          @click="selectTweet(tweet)"
        >
          <div class="flex flex-row w-full">
            <div v-if="tweet.user.avatar" class="flex mr-10px h-49px w-49px">
              <img
                :src="tweet.user.avatar"
                alt="img was here"
                class="rounded-full"
              />
            </div>
            <div v-else class="flex mr-10px h-49px w-49px text-gray">
              <f-icon
                :icon="['fas', 'user-circle']"
                class="min-w-36px h-full w-full"
              />
            </div>
            <div class="flex-shrink flex flex-col flex-1">
              <div class="inline-flex flex-row justify-between items-baseline">
                <span class="inline-flex flex-row items-center font-normal">
                  <div
                    @click.stop="
                      routeTo({
                        name: 'UserDetails',
                        params: { user: tweet.user.name },
                      })
                    "
                    class="tweet-username"
                  >
                    <span class="text-15px font-bold">
                      {{ tweet.user.alias }}
                    </span>
                    <span class="font-normal text-gray-dark ml-1"
                      >@{{ tweet.user.name }}</span
                    >
                  </div>

                  <span class="mx-1" v-html="middot"></span>
                  <span class="text-gray-dark">
                    {{ tweet.createdAt | formatDate }}
                  </span>
                </span>

                <base-button class="with-icon text-13px">
                  <f-icon
                    :icon="['fas', 'chevron-down']"
                    class="text-gray"
                  ></f-icon>
                </base-button>
              </div>
              <span class="text-15px">{{ tweet.title }}</span>
              <div
                class="pt-5px pb-5px flex flex-row justify-between items-center"
              >
                <base-button class="with-icon">
                  <f-icon
                    :icon="['far', 'comment']"
                    class="text-gray-dark"
                  ></f-icon>
                  <span class="text-gray-dark text-13px mx-10px">
                    {{ tweet.replies.length }}
                  </span>
                </base-button>
                <base-button class="with-icon">
                  <f-icon
                    :icon="['fas', 'retweet']"
                    class="text-gray-dark"
                  ></f-icon>
                  <span class="text-gray-dark text-13px mx-10px">
                    {{ tweet.retweets }}
                  </span>
                </base-button>
                <base-button class="with-icon">
                  <f-icon
                    :icon="['far', 'heart']"
                    class="text-gray-dark"
                  ></f-icon>
                  <span class="text-gray-dark text-13px mx-10px">
                    {{ tweet.likes }}
                  </span>
                </base-button>
                <base-button class="with-icon">
                  <f-icon
                    :icon="['far', 'share-square']"
                    class="text-gray-dark"
                  ></f-icon>
                </base-button>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </article>
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
import moment from "moment";
export default {
  name: "TheTweets",
  components: {
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
  created() {
    this.tweets;
  },
  computed: {
    tweets() {
      return this.$store.getters.getTweets;
    },
  },
  methods: {
    selectTweet: function(tweet) {
      this.$store.commit("setTweet", tweet);
      this.fetchReplies(tweet.id);
      this.scrollTop();
      this.routeTo({
        name: "TweetDetails",
        params: { user: tweet.user.name, statusId: tweet.id },
      });
    },
    routeTo({ name, params }) {
      this.$router.push({
        name: name,
        params: params,
      });
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
    fetchReplies: function(param) {
      this.$store.dispatch("fetchReplyTweets", param);
    },
  },
  filters: {
    formatDate: function(date) {
      return moment(date).format("MMM D");
    },
  },
};
</script>

<style lang="postcss" scoped>
.tweet-username:hover > span:first-child {
  @apply underline;
}
</style>
