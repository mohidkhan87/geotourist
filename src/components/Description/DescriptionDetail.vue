<template>
    <div class="w-5/12">
        <div class="flex justify-between mx-4 my-4">
            <div class="flex items-center">
                <p class="px-2 p-3 text-primary active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(0)" :class="{ active: active_el == 0 }">English</p>
                <p class="px-2 p-3 text-primary active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(1)" :class="{ active: active_el == 1 }">French</p>
                <p class="px-2 p-3 text-primary active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(2)" :class="{ active: active_el == 2 }">Deutch</p>
                <p class="px-2 p-3 text-primary active:text-secondary transition ease-in-out duration-150 cursor-pointer"
                    @click="activate(3)" :class="{ active: active_el == 3 }">Spanish</p>
            </div>
            <div>
                <button
                    class="text-primary font-semibold border-solid border-4 border-primary py-2 px-6 rounded-3xl hover:border-secondary hover:text-white hover:bg-secondary"><a>+
                        Add...</a></button>
            </div>
        </div>
        <div>
            <img src="@/assets/css/Description/landscape.jpg" class="w-full h-72 rounded-xl heroImg" alt="" />
        </div>
        <div class="my-8">
            <h1 class="text-3xl font-bold">
                A walking trail of Montmartre, Paris
            </h1>
        </div>
        <div class="my-8">
            <p>Dominated by the grandeur of the ever-visible Sacré-Cœur Basilica, the leafy hilltop village of
                Montmartre was once the play area of Paris’s most famous artists, bohemians and creatures of the night.
                These days, the winding cobbled streets host chic cafes, retro boutiques and fine French dining but, if
                you look closely enough, those in search of historical secrets can still find traces of the old La
                Bohème hidden between the tourist traps…</p>
        </div>
        <TagsVue />
        <Categories />
    </div>
</template>
<script>
import TagsVue from './Tags.vue';
import Categories from './Categories/Categories.vue';
export default {
    name: 'DescriptionDetail',
    components: {
        TagsVue,
        Categories
    },
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
<style>
.active {
    border-bottom: 4px solid #2DAEE1;
    color: #2DAEE1;

}

.heroImg {
    mask-image: linear-gradient(to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.65) 20%);
    -webkit-mask-image: linear-gradient(to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.65) 30%);
}
</style>