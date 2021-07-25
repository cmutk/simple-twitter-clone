<template>
<div>
 <div class=" pointer-events-none fixed inset-x-0 bottom-54px flex justify-end z-0 bg-opacity-0">
<router-link router-link to="/compose/tweet" class="pointer-events-auto flex py-1 w-1/4 justify-center z-20 py-10px">
        <div class="inline-flex items-center p-10px rounded-full bg-blue text-white z-20">
            <f-icon :icon="['fas', 'feather-alt']" class="min-w-36px min-h-36px p-5px"/>
       </div>
      </router-link>
           </div>
 <div class="fixed inset-x-0 bottom-0 z-20">
            <div class="flex flex-row justify-center items-center bg-white">
            <nav class="flex flex-row grow w-full justify-evenly items-center ">
      <router-link to="/home" exact class="flex h-full w-full">
        <div class="nav-button">
          <f-icon :icon="['fas', 'home']" class="min-w-36px h-6" />
        </div>
      </router-link>
      <router-link to="/explore" class="flex h-full w-full">
        <div class="nav-button">
          <f-icon :icon="['fas', 'search']" class="min-w-36px h-6" />
        </div>
      </router-link>
            <router-link  to="/notifications" class="flex h-full w-full">
        <div class="nav-button">
          <f-icon :icon="['fas', 'bell']" class="min-w-36px h-6" />
        </div>
      </router-link>
            <router-link to="/messages" class="flex h-full w-full">
        <div class="nav-button">
          <f-icon :icon="['fas', 'envelope']" class="min-w-36px h-6" />
        </div>
      </router-link>

            </nav>

            </div>
         </div>
</div>
        
</template>
<script>
export default {
    name:"MobileNav",
}
</script>
<style lang="postcss">
.nav-button{
    @apply flex justify-center items-center w-full text-gray-dark text-sm py-10px
}
a.router-link-exact-active .nav-button{
    @apply text-blue-dark
}
</style>