<template>
    <div class="p-6 text-primary">
        <div class="mx-4 py-5 cursor-pointer">
            <h2 class="font-bold text-lg cursor-pointer pb-1 transition ease-in-out duration-150" @click="activate(0)"
                :class="{ active: active_el == 0 }">
                <a href="#"> Description</a>
            </h2>
        </div>
        <div class="px-4 py-3 cursor-pointer">
            <h2 class="font-bold text-lg cursor-pointer"> Points</h2>
        </div>
        <div class="ml-8">
            <div class="flex items-center gap-2 my-4 cursor-pointer">
                <div class="w-3 ">
                    1
                </div>
                <div>
                    <p>Abbesses Metro Station</p>
                </div>
            </div>
            <div class="flex items-center gap-2 my-4 cursor-pointer">
                <div class="w-3 ">
                    2
                </div>
                <div>
                    <p>Pigalle and the Moulin R...</p>
                </div>
            </div>
            <div class="flex items-center gap-2 my-4 cursor-pointer">
                <div class="w-3 ">
                    <img src="@/assets/css/Description/plus-48.png" alt="">
                </div>
                <div>
                    <p>Create new point</p>
                </div>
            </div>
        </div>
        <div class="px-4 py-3">
            <h2 class="font-bold text-lg cursor-pointer pb-2 transition ease-in-out duration-150" @click="activate(1)"
                :class="{ active: active_el == 1 }">
                <a href="#"> Media</a>
            </h2>
        </div>
        <div class="px-4 py-3">
            <h2 class="font-bold text-lg cursor-pointer pb-2 transition ease-in-out duration-150" @click="activate(2)"
                :class="{ active: active_el == 2 }">
                <a href="#">Setting</a>
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navigation',
    data() {
        return {
            active_el: 0
        }
    },
    methods: {
        activate: function (el) {
            this.active_el = el;
        }
    }
}


</script>
<style scoped>
.active {
    border-bottom: 2px solid #2DAEE1;
    color: black;
}
</style>