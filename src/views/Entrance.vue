<template>
  <main class="flex tw-0:flex-col-reverse tw-1004:flex-row h-screen w-screen">
    <div
      class="flex-1 flex flex-col relative justify-center items-stretch overflow-hidden p-4 bg-blue bg-opacity-50 z-0"
    >
      <f-icon
        :icon="['fab','twitter']"
        class="svg-inline--fa.fa-w-16 inline-block absolute max-w-none h-screen-160 -top-30vh -right-50vh inline-block text-blue z-0"
      />
      <div class="flex flex-col relative self-center max-w-380px z-10 text-white">
        <template v-for="info in infos  ">
          <div :key="info.id" class="flex flex-row items-center mb-10 text-23px">
            <f-icon :icon="info.iconText" />
            <div class="ml-4 text-19px font-bold">{{info.title}}</div>
          </div>
        </template>
      </div>
    </div>

    <div class="flex-1 flex flex-col relative justify-center overflow-hidden p-4 bg-white">
      <div class="self-center absolute top-15px px-15px tw-0:hidden tw-1282:flex">
        <login-form layout="horizontal"/>
      </div>
      <div class="flex flex-col relative self-center max-w-380px">
        <div class="flex flex-col">
          <f-icon :icon="['fab','twitter']" class="self-start h-11 text-blue text-3xl" />
          <div class="text-3xl font-bold mt-5">
            <span>See what's happening in the world right now</span>
          </div>
          <div class="text-base font-bold mt-14 mb-15px">
            <span>Join Twitter today.</span>
          </div>
          <div class="min-h-39px mb-15px flex flex flex-col">
            <base-button href="/signup" class="btn primary">Sign up</base-button>
          </div>
          <div class="min-h-39px mb-15px flex flex flex-col">
            <base-button href="/login" class="btn secondary">Log in</base-button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import LoginForm from "@/components/forms/LoginForm.vue";
import BaseButton from "@/components/shared/BaseButton.vue";

export default {
  name: "Entrance",
  components: {
    LoginForm,
    BaseButton,
  },
  data() {
    return {
      infos: [
        {
          id: 1,
          iconText: ["fas", "search"],
          title: "Follow your interests.",
        },
        {
          id: 2,
          iconText: ["fas", "user-friends"],
          title: "Hear what people are talking about.",
        },
        {
          id: 3,
          iconText: ["far", "comment"],
          title: "Join the conversation.",
        },
      ],

    };
  },

 
};
</script>
<style lang="postcss" scoped>
.svg-inline--fa.fa-w-16 {
  @apply w-auto;
}
</style>