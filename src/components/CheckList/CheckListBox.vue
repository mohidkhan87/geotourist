<template>
    <div>
        <div class="flex justify-between my-2">
            <p>{{ name }}</p>
            <div class="w-6 ">
                <img src="@/assets/css/Description/plus-48.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CheckListBox',
    props: {
        name: {
            type: String,
            required: true
        }
    },
}
</script>
<style>
</style>