<template>
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
</template>
<script>
import BaseButton from "@/components/shared/BaseButton.vue";
import ListCard from "@/components/shared/TheListCard.vue";
export default {
    name: "TheSearchFilters",
    components: {
    BaseButton,
    ListCard
  },
}
</script>
<style lang="postcss" scoped>

</style>