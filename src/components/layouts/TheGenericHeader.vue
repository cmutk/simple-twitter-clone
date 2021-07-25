<template>
  <header class="static-structure" :class="mediaQueries">
    <div class="tw-500:w-88px bg-transparent tw-1282:w-275px h-full ">
      <div class=" h-full fixed">
        <div class=" h-full px-10px">
          <div class="flex flex-col justify-between items-start overflow-y-auto">
            <slot />
          </div>
        </div>
    </div>  
    </div>
    
  </header>
</template>
<script>
export default {
  name: "TheGenericHeader",
  props:{
    mediaQueries:{
      type:String,
      default:"tw-0:hidden tw-500:flex"
      }    
  }
};
</script>
<style lang="postcss" scoped>

.static-structure{
@apply flex-grow justify-end z-10
}

</style>