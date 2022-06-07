<template>
    <div>
        <div class="py-4">
            <h2 class="font-bold text-lg">Categories</h2>
        </div>
        <div class="grid grid-cols-5 py-3 gap-6">
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
            <CategoriesBox />
        </div>
    </div>
</template>
<script>
import CategoriesBox from './CategoriesBox.vue'
export default {
    name: 'Categories',
    components: {
        CategoriesBox
    }
}
</script>
<style>
</style>