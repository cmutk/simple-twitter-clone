<template>
  <div class="flex flex-row w-full">
    <main-layout>
      <template v-slot:main-header-column>
        <main-nav></main-nav>
      </template>
      <template v-slot:main-content>
        <router-view :key="$route.fullPath" />
      </template>
    </main-layout>
    <mobile-nav v-if="isUserLoggedIn && windowWidth < 500" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainLayout from "@/components/layouts/TheMainLayout.vue";
import MainNav from "@/components/TheMainNav.vue";
import MobileNav from "@/components/MobileNav.vue";
// import SignUpBanner from "@/components/layouts/TheSignUpBanner.vue";

export default {
  name: "Main",
  components: {
    MainLayout,
    MainNav,
    MobileNav,
    // SignUpBanner
  },
  data() {
    return {
      key: this.$route.path,
      windowWidth: 0,
    };
  },
  created() {
    this.$data.windowWidth = window.innerWidth;
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
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.getLoggedUser;
    },
  },
};
</script>
<style lang="postcss" scoped>
.svg-inline--fa.fa-w-16 {
  @apply w-auto;
}
</style>
