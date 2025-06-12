<template>
    <div>
        {{ uid.decode($route.params.id) }}<br>
    </div>
</template>

<script setup>
import { SecureUId } from "@/helpers";

const uid = new SecureUId()
</script>

<style lang="scss" scoped>

</style>