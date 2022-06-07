<template>
  <div class=" w-11/12 my-2 px-9">
    <div class="bg-white border-b-2">
      <div class="px-2">
        <div class="flex items-center justify-between py-4">
          <div>
            <a href="#"><img src="@/assets/css/Header/logo.png" width="170px" /></a>
          </div>

          <div class="hidden sm:flex sm:items-center">
            <a href="#" class="text-primary font-semibold hover:text-secondary mr-4">Discover</a>
            <a href="#" class="text-primary font-semibold hover:text-secondary mr-4">Create</a>
            <button
              class="px-3 py-2 font-semibold bg-secondary text-white rounded-3xl hover:bg-white hover:text-primary border-solid border-2 border-secondary"><a>Download</a></button>
          </div>

          <div class=" flex items-center gap-5">
            <a href="#" class="sm:mr-4  ">
              <img src="@/assets/css/Header/add-bookmark.png" width="17px">
            </a>
            <a href="#" class="sm:mr-4">
              <img src="@/assets/css/Header/notification-bell.png" width="22px">
            </a>
            <a href="#" class="sm:mr-4 ">
              <img src="@/assets/css/Header/avatar.png" alt="" width="35px">
            </a>
            <div class="sm:hidden cursor-pointer" @click="showTopMenu = !showTopMenu">
              <img src="../assets/css/Header/hamburger-menu.png" width="20px">
            </div>
          </div>

        </div>

        <div class="block sm:hidden bg-white border-t-2 py-2" :class="{ hidden: showTopMenu }">
          <div class="flex flex-col text-center mx-auto">
            <a href="#" class="text-primary font-semibold hover:text-secondary py-4">Discover</a>
            <a href="#" class="text-primary font-semibold hover:text-secondary py-4">Create</a>
            <button
              class="px-3 py-2 font-semibold bg-secondary text-white rounded-3xl hover:bg-white hover:text-primary border-solid border-2 border-secondary"><a>Download</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTopMenu: false,
    }
  },
};
</script>
<style>
.hidden {
  display: none;
}
</style>