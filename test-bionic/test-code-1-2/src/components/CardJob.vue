<template>
    <div class="px-4 py-3 bg-[#F0EDE5] flex flex-row justify-between rounded-lg">
        <h4 class="text-[#4B9741] font-semibold">
            {{ props.title }}
        </h4>
        <button class="px-2 py-1 rounded-md text-white bg-[#F09506]" @click="$emit('detail-job', props.id)">
            See Job
        </button>
    </div>
</template>

<script setup>

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false
    },
    id: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: "Marketing Planner"
    }
})

</script>