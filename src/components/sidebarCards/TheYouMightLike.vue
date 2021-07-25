<template>
 <list-card
        aria-label="Search-filters"
        :card-type="'card sidebar'"
        :bg-color="'white-bg'"
        header-text="You Might Like"
        button-href="/login"
        button-text="Show More"
      >
        <template v-slot:content>
        <li v-for="relevantUser of relevantUsers"
          :key="relevantUser.userId" 
        class="flex py-10px px-15px border-b border-gray-light cursor-pointer" 
        >
          <div class="flex flex-row w-full">
            <div v-if="relevantUser.avatar" class="flex mr-10px h-49px w-49px">
              <img :src="relevantUser.avatar" alt="img was here" class="rounded-full" />
            </div>
            <div v-else class="flex mr-10px h-49px w-49px text-gray">
              <f-icon :icon="['fas', 'user-circle']" class="min-w-36px h-full w-full" />
            </div>
            <div class="flex-shrink flex flex-col flex-1">
              <div class="inline-flex flex-row justify-between items-baseline">
             
                <span class="inline-flex flex-row items-center font-normal">
                  <div
                    @click.stop="routeTo({name:'UserDetails',params:{user: relevantUser.name }})"
                    class="user-username"
                  >
                    <span class="text-15px font-bold">
                      {{
                      relevantUser.alias
                      }}
                    </span>
                    <span class="font-normal text-15px text-gray-dark ">@{{ relevantUser.name }}</span>
                  </div>
             </span>  
             <div class="flex items-center self-center h-30px">
                <base-button subType="button" class="btn secondary ">Follow</base-button>
             </div>
              </div>
        
            </div>
          </div>
        </li>
        </template>
      </list-card>
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
import ListCard from "@/components/shared/TheListCard.vue";
export default {
    name: "TheYouMightLike",
    components: {
    BaseButton,
    ListCard
  },
  methods:{
    routeTo({ name, params }) {
      this.$router.push({
        name: name,
        params: params,
      });
    },
  },
    created() {
    this.$store.dispatch("fetchRandomUsers");
  },
  computed: {
    relevantUsers() {
      return this.$store.getters.getRandomUsers;
    },
  },
}
</script>
<style lang="postcss" scoped>
.user-username{
    @apply flex flex-col
}
.user-username:hover > span:first-child {
  @apply underline;
}
</style>