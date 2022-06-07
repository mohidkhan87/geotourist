<template>
    <div class="w-64 ml-9">
        <div class="py-4">
            <h2 class="font-bold text-lg">Check List</h2>
        </div>
        <div>
            <CheckListBox name="Name" />
            <CheckListBox name="Description" />
            <CheckListBox name="Cover Photo" />
            <CheckListBox name="Atleast 1 Photo" />
            <div class="my-2">
                <p>Narration</p>
            </div>
            <div class="my-2">
                <p>Media</p>
            </div>
            <div class="flex flex-col ">
                <div class="my-2">
                    <button
                        class="text-primary  w-full font-semibold border-solid border-4 border-primary py-2 px-6 rounded-3xl hover:border-secondary hover:text-white hover:bg-secondary"><a>+
                            Add...</a></button>
                </div>
                <button
                    class="my-2 px-3 py-2 font-semibold bg-secondary text-white rounded-3xl hover:bg-white hover:text-primary border-solid border-4 border-secondary hover:border-primary"><a>Download</a>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import CheckListBox from './CheckListBox.vue'
export default {
    name: 'CheckList',
    components: {
        CheckListBox
    },
}
</script>
<style>
</style>