<template>
  <nav
    class="flex flex-col justify-between items-start overflow-y-auto tw-500:h-screen tw-1282:h-auto"
  >
    <div class="flex flex-col justify-between items-start">
      <div class="min-h-49px min-w-49px py-2px px-2">
        <base-button href="/" class="with-icon hw-49px">
          <f-icon :icon="['fab', 'twitter']" class="min-w-36px h-8" />
        </base-button>
      </div>
      <div id="nav-buttons" class="w-full ">
        <router-link v-if="isUserLoggedIn" to="/home" class="flex py-1">
          <div
            class="nav-button tw-0:justify-center tw-1282:justify-start items-center"
          >
            <f-icon :icon="['fas', 'home']" class="min-w-36px h-7" />
            <span
              class="ml-20px mr-15px text-19px font-bold tw-500:hidden tw-1282:block"
              >Home</span
            >
          </div>
        </router-link>
        <router-link to="/explore" class="flex py-1">
          <div
            class="nav-button tw-0:justify-center tw-1282:justify-start items-center"
          >
            <f-icon :icon="['fas', 'hashtag']" class="min-w-36px h-7" />
            <span
              class="ml-20px mr-15px text-19px font-bold tw-500:hidden tw-1282:block"
              >Explore</span
            >
          </div>
        </router-link>
        <router-link v-if="!isUserLoggedIn" to="/settings" class="flex py-1">
          <div
            class="nav-button tw-0:justify-center tw-1282:justify-start items-center"
          >
            <f-icon :icon="['fas', 'cog']" class="min-w-36px h-7" />
            <span
              class="ml-20px mr-15px text-19px font-bold tw-500:hidden tw-1282:block"
              >Settings</span
            >
          </div>
        </router-link>
        <template v-if="isUserLoggedIn">
          <template v-for="button in buttons">
            <router-link :key="button.id" :to="button.href" class="flex py-1 ">
              <div
                class="nav-button tw-0:justify-center tw-1282:justify-start items-center"
              >
                <f-icon :icon="button.iconText" class="min-w-36px h-7" />
                <span
                  class="ml-20px mr-15px text-19px font-bold tw-500:hidden tw-1282:block "
                  >{{ button.title }}</span
                >
              </div>
            </router-link>
          </template>
        </template>
      </div>
    </div>
    <template
      v-if="isUserLoggedIn"
      class="min-h-49px min-w-49px w-full h-49px py-2px px-2"
    >
      <router-link to="/compose/tweet" class="flex py-1 tw-1282:w-full">
        <div
          class="inline-flex tw-0:justify-start items-center p-10px rounded-full tw-1282:justify-center tw-1282:w-full bg-blue text-white"
        >
          <f-icon
            :icon="['fas', 'feather-alt']"
            class="min-w-36px min-h-36px p-5px tw-500:block tw-1282:hidden"
          />
          <span
            class="ml-20px mr-15px text-19px font-bold tw-500:hidden tw-1282:block"
            >Tweet</span
          >
        </div>
      </router-link>
    </template>
  </nav>
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
export default {
  name: "TheMainNav",
  components: {
    BaseButton,
  },
  data() {
    return {
      buttons: [
        {
          id: 1,
          href: "/notifications",
          iconText: ["far", "bell"],
          title: "Notifications",
        },
        {
          id: 2,
          href: "/messages",
          iconText: ["far", "envelope"],
          title: "Messages",
        },
        {
          id: 3,
          href: "/i/bookmarks",
          iconText: ["far", "bookmark"],
          title: "Bookmarks",
        },
        {
          id: 4,
          href: "/profileName/lists",
          iconText: ["far", "list-alt"],
          title: "Lists",
        },
        {
          id: 5,
          href: "/userdetailspageforuser",
          iconText: ["far", "user"],
          title: "Profile",
        },
        {
          id: 6,
          href: "/settings",
          iconText: ["fas", "ellipsis-h"],
          title: "More",
        },
      ],
    };
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.getLoggedUser ? true : false;
    },
  },
};
</script>
<style lang="postcss" scoped>
#nav-buttons a.router-link-exact-active .nav-button {
  @apply text-blue;
}
.nav-button {
  @apply inline-flex  p-10px rounded-full;
}
a:hover > .nav-button,
.nav-button:hover {
  @apply bg-blue bg-opacity-10 text-blue;
}
.nav-button.reverse {
  @apply bg-blue text-white;
}
</style>
