<template>
    <div>
        <Teleport to="#above-content">
            <slider-component></slider-component>
        </Teleport>
    </div>
</template>
<script setup>
import SliderComponent from '@module/speedyvisuals/components/SliderComponent.vue'
</script>
<style lang="scss" scoped>
</style>