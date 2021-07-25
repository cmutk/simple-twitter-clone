<template>
     <aside class="fixed inset-x-0 bottom-0 bg-blue z-20">
      <div class="flex flex-row justify-center items-center my-10px">
        <generic-header class="tw-0:hidden tw-500:hidden tw-704:flex"/>
        <generic-main>
          <primary-column border-style="none" class="min-w-full tw-0:min-w-full tw-704:min-w-600px">
            <div class="flex flex-row justify-between">
            <div class="flex flex-col w-auto h-full text-white tw-0:hidden tw-704:flex">
              <h1 class="text-23px font-bold z-10">Don't miss what's happening.</h1>
              <span class="text-15px">People on Twitter are the first to know.</span>
            </div>
            <div class="flex flex-row self-stretch items-center min-h-full tw-0:w-full tw-704:w-auto tw-0:mx-4 tw-704:mx-0 tw-1004:hidden">
            <div class="py-px tw-0:w-full tw-704:w-auto">
            <base-button href="/login" class="btn primary reverse tw-0:min-h-32px tw-500:min-h-39px tw-500:max-h-39px">Log in</base-button>
            </div>
            <div class="ml-10px tw-0:w-full tw-704:w-auto">
            <base-button href="/" class="btn secondary reverse tw-0:min-h-32px tw-500:min-h-39px tw-500:max-h-39px">Sign up</base-button>
            </div>
             </div>

            </div>
          
          </primary-column>
          <sidebar-column>
       <div class="flex flex-row justify-end self-stretch items-center w-full min-h-full">
        <div class="py-px">
          <base-button href="/login" class="btn primary reverse min-h-39px">Log in</base-button>
        </div>
        <div class="ml-10px">
          <base-button href="/" class="btn secondary reverse min-h-39px">Sign up</base-button>
        </div>
      </div>
          </sidebar-column>
        </generic-main>
      </div>
    </aside>
</template>
<script>
import GenericMain from "@/components/layouts/TheGenericMain.vue";
import GenericHeader from"@/components/layouts/TheGenericHeader.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import PrimaryColumn from "@/components/layouts/ThePrimaryColumn.vue";
import SidebarColumn from "@/components/layouts/TheSidebarColumn.vue";
export default { 
    name: "TheSignUpBanner",
    components: {
    BaseButton,
    GenericHeader,
    GenericMain,
    PrimaryColumn,
    SidebarColumn
  },
    
}

</script>
<style lang="postcss" scoped>

</style>