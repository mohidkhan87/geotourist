<template>
  <div class="min-w-full">
    <HeaderVue />
    <div class="flex gap-3">
      <NavigationVue />
      <DescriptionDetailVue />
      <CheckList />
    </div>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue'
import NavigationVue from '@/components/Description/Navigation.vue'
import DescriptionDetailVue from '@/components/Description/DescriptionDetail.vue'
import CheckList from '@/components/CheckList/CheckList.vue'
export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
    DescriptionDetailVue,
    CheckList
  },

}
</script>