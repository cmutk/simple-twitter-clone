<template>
  <article :columnType="columnType">
    <list-card
      aria-label="Events"
      :card-type="columnType==='sidebar'? 'card sidebar':'card'"
      :bg-color="columnType==='sidebar'? 'gray-bg':'white-bg'"
      header-text="What's happening"
      :header-icon="columnType==='sidebar'? ['fas', 'cog']:undefined"
      button-text="Show more"
      button-href="/login"
    >
      <template v-slot:content>
        <li
          v-for="event of events"
          :key="event.id"
          :class="columnType==='sidebar'?'hover:bg-gray-light':'hover:bg-blue hover:bg-opacity-10'"
          class="flex flex-row h-22 py-10px px-15px border-b border-gray-light cursor-pointer"
        >
          <div class="flex-6 flex flex-col mr-15px">
            <div class="inline-flex flex-row justify-between items-baseline">
              <!-- <span class="text-13px text-gray-dark">Türkiye tarihinde gündemde</span> -->
              <span class="inline-flex flex-row items-center text-13px font-normal text-gray-dark">
                <span>{{event.genre}}</span>
                <span class="mx-1" v-html="middot"></span>
                <span>{{event.timeline}}</span>
              </span>
            </div>
            <span class="text-15px font-bold break-words">{{event.title}}</span>
          </div>
          <div class="flex-1 bg-blue p-4 rounded-xl"></div>
        </li>
      </template>
    </list-card>
  </article>
</template>
<script>
// import BaseButton from "@/components/shared/BaseButton.vue";
import ListCard from "@/components/shared/TheListCard.vue";
export default {
  name: "TheEvents",
  components: {
    ListCard,
    // BaseButton,
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
      events: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
          timeline: "LIVE",
          genre: "Politics",
        },
        {
          id: 2,
          title:
            "Nemo eum libero dolorem eaque hic maxime in illo eius, rem alias quod qui accusamus veniam?",
          timeline: "LIVE",
          genre: "Music",
        },
        {
          id: 3,
          title: "Blanditiis veniam et at libero vero.",
          timeline: "LIVE",
          genre: "Entertainment",
        },
        {
          id: 4,
          title: "Rem alias quod qui accusamus veniam?",
          timeline: "LIVE",
          genre: "News",
        },
        {
          id: 5,
          title: "Nemo eum libero dolorem eaque hic maxime in illo eius.",
          timeline: "This morning",
          genre: "News",
        },
        {
          id: 6,
          title: "Amet consectetur adipisicing elit.",
          timeline: "Starts at 3:00 AM",
          genre: "Television",
        },
        {
          id: 7,
          title: "Lorem ipsum dolor sit!",
          timeline: "LIVE",
          genre: "Covid-19",
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
</style>