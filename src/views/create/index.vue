<template>
  <div class="min-w-full">
    <HeaderVue />
    <div class="flex">
      <div>
        <NavigationVue />
      </div>
      <div class="w-full flex">
        <div class="flex-1">A</div>
        <div class="w-64 p-8 border">
          <div class="shadow">
            asd
          </div>
        </div>
      </div>
      <!-- <DescriptionDetailVue /> -->
      <!-- <CheckList /> -->
    </div>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import NavigationVue from '@/components/Description/Navigation.vue'
// import DescriptionDetailVue from '@/components/Description/DescriptionDetail.vue'
// import CheckList from '@/components/CheckList/CheckList.vue'
export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
    // DescriptionDetailVue,
    // CheckList
  },

}
</script>