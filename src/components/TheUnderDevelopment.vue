<template>
  <generic-main>
    <primary-column border-style="column" class="bg-gray-light">
   <div class="flex justify-items-center w-full h-screen bg-white">
      <div class="flex px-6 pt-12 text-3xl">
          This page is not ready yet and probably never will. Sorry for inconvenience.
          </div> 
    </div>
    </primary-column>
    <sidebar-column class="pb-59px">
      <div class="flex-grow flex-shrink justify-center content-center mx-5px my-10px">
        <search-box />
      </div>
      <the-trending column-type="sidebar"></the-trending>
    </sidebar-column>
  </generic-main>





</template>

<script>
import GenericMain from "@/components/layouts/TheGenericMain.vue";
import PrimaryColumn from "@/components/layouts/ThePrimaryColumn.vue";
import SidebarColumn from "@/components/layouts/TheSidebarColumn.vue";
import SearchBox from "@/components/TheSearchBox.vue";

import TheTrending from "@/components/TheTrending.vue";

export default {
name:"TheUnderDevelopment",
components:{
    GenericMain,
    PrimaryColumn,
    SidebarColumn,
    SearchBox,
    TheTrending,
 
}
};
</script>
<style></style>