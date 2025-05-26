<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    Basic system options
                </div>
                <div class="card-body">
                    <SetOption :fields="bso"></SetOption>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    Order settings
                </div>
                <div class="card-body">
                    <SetConfig :fields="orderSettings"></SetConfig>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import SetOption from '@/components/form/SetOption.vue'
    import SetConfig from '@/components/form/SetConfig.vue'
    import { computed } from 'vue'
    import * as yup from 'yup'

    const bso = computed(() => [

    ])

    const orderSettings = computed(() => [
        {
            label: "Services",
            as: "collection",
            name: "spvservices",
            rows: 1,
            fields: [
                {
                    label: "Service",
                    name: "service",
                    col: 6
                },
                {
                    label: "Order",
                    name: "order",
                    col: 6,
                    type: "tel",
                    inputmode: "numeric",
                    pattern: "[0-9]*",
                    rules: yup.number()
                }
            ]
        },
        {
            label: "Currency",
            name: "currency.base"
        }
    ])
</script>

<style lang="scss" scoped>

</style>